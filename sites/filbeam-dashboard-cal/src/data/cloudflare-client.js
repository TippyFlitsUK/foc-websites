import { assertOkResponse } from 'assert-ok-response'

const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504])
const MAX_ATTEMPTS = 5

/**
 * @param {string} sql
 * @param {string[]} [params=[]]
 * @returns {Promise<any>}
 */
export const query = async (sql, params = []) => {
  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
    },
    body: JSON.stringify({ sql, params }),
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const response = await fetch(url, init)
    if (response.ok) return await response.json()
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_ATTEMPTS) {
      await assertOkResponse(response)
    }
    const delayMs = 1000 * 2 ** (attempt - 1)
    process.stderr.write(
      `D1 query ${response.status} (attempt ${attempt}/${MAX_ATTEMPTS}); retrying in ${delayMs}ms\n`,
    )
    await new Promise((r) => setTimeout(r, delayMs))
  }
}

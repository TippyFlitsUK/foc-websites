import type { SynapseSetupConfig } from 'filecoin-pin/core/synapse'

const normalizeEnvValue = (value: string | boolean | number | undefined) => {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed.length === 0 ? undefined : trimmed
}

// Hardcoded defaults (can be overridden by env vars)
// Signer 0xa20f4a04... authorized on-chain until 2026-08-02 17:32:22 UTC.
// Matches live pin.filecoin.cloud. Refresh by extracting from live bundle when
// this expires, or issue a new authorization from the owner wallet.
const DEFAULT_WALLET_ADDRESS = '0x44f08D1beFe61255b3C3A349C392C560FA333759'
const DEFAULT_SESSION_KEY = '0x416dc827726298c032acf086ddf45c1de79b8e62f3af2ffe0377afe08862deb3'

const privateKey = normalizeEnvValue(import.meta.env.VITE_FILECOIN_PRIVATE_KEY)
const walletAddress = normalizeEnvValue(import.meta.env.VITE_WALLET_ADDRESS)
const sessionKey = normalizeEnvValue(import.meta.env.VITE_SESSION_KEY)

const hasStandardAuth = privateKey != null
const hasSessionKeyAuth = walletAddress != null && sessionKey != null

if (hasStandardAuth && hasSessionKeyAuth) {
  throw new Error(
    'Conflicting authentication: provide either VITE_FILECOIN_PRIVATE_KEY or (VITE_WALLET_ADDRESS + VITE_SESSION_KEY), not both'
  )
}

const auth = hasStandardAuth
  ? { privateKey }
  : {
      walletAddress: walletAddress ?? DEFAULT_WALLET_ADDRESS,
      sessionKey: sessionKey ?? DEFAULT_SESSION_KEY,
    }

export const filecoinPinConfig: SynapseSetupConfig = {
  ...auth,
  rpcUrl: normalizeEnvValue(import.meta.env.VITE_FILECOIN_RPC_URL),
  warmStorageAddress: normalizeEnvValue(import.meta.env.VITE_WARM_STORAGE_ADDRESS),
}

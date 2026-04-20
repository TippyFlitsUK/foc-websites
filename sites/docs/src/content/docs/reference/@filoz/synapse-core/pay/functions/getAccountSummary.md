---
title: getAccountSummary
next: true
prev: true
editUrl: false

---

> **getAccountSummary**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:81](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L81)

Get a comprehensive account summary from the Payments contract.

Fetches account state, fixed lockup totals, and (optionally) current epoch
in parallel, then derives debt, available funds, lockup breakdown, and
funded-until timeline client-side.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use for the query. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/optionstype/) | [getAccountSummary.OptionsType](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)\>

Full account summary [getAccountSummary.OutputType](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)

## Throws

Errors [getAccountSummary.ErrorType](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/errortype/)

## Example

```ts
import { getAccountSummary } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const summary = await getAccountSummary(client, {
  address: '0x1234567890123456789012345678901234567890',
})

console.log('Available:', summary.availableFunds)
console.log('Funded until epoch:', summary.fundedUntilEpoch)
```

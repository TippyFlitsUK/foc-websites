---
title: settleTerminatedRailWithoutValidationSync
next: true
prev: true
editUrl: false

---

> **settleTerminatedRailWithoutValidationSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts:131](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts#L131)

Settle a terminated payment rail without validation and wait for confirmation

Emergency settlement for terminated rails and waits for the transaction to be confirmed.
Returns the receipt with the RailSettled event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `railId`: `bigint`; \} | [settleTerminatedRailWithoutValidationSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.railId` | `bigint` | The rail ID to settle |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [settleTerminatedRailWithoutValidationSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/type-aliases/outputtype/)

## Throws

Errors [settleTerminatedRailWithoutValidationSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/type-aliases/errortype/)

## Example

```ts
import { settleTerminatedRailWithoutValidationSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await settleTerminatedRailWithoutValidationSync(client, {
  railId: 1n,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Total settled amount:', event.args.totalSettledAmount)
console.log('Settled up to epoch:', event.args.settledUpTo)
```

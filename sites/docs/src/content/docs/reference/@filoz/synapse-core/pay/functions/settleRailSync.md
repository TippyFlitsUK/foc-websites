---
title: settleRailSync
next: true
prev: true
editUrl: false

---

> **settleRailSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:143](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L143)

Settle a payment rail up to a specific epoch and wait for confirmation

Settles accumulated payments for a rail and waits for the transaction to be confirmed.
Returns the receipt with the RailSettled event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `railId`: `bigint`; `untilEpoch?`: `bigint`; \} | [settleRailSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.railId` | `bigint` | The rail ID to settle |
| `options.untilEpoch?` | `bigint` | The epoch to settle up to. If not provided, the current epoch will be used. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [settleRailSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/type-aliases/outputtype/)

## Throws

Errors [settleRailSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/type-aliases/errortype/)

## Example

```ts
import { settleRailSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await settleRailSync(client, {
  railId: 1n,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Total settled amount:', event.args.totalSettledAmount)
console.log('Settled up to epoch:', event.args.settledUpTo)
```

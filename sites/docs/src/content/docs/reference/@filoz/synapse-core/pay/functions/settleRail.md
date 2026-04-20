---
title: settleRail
next: true
prev: true
editUrl: false

---

> **settleRail**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:75](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L75)

Settle a payment rail up to a specific epoch

Settles accumulated payments for a rail, transferring funds from the payer to the payee.
The settlement can be done up to a specific epoch (must be <= current epoch).
If untilEpoch is not provided, it will settle up to the current epoch.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/settlerail/type-aliases/optionstype/) | [settleRail.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settlerail/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [settleRail.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settlerail/type-aliases/errortype/)

## Example

```ts
import { settleRail } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Settle rail up to current epoch
const hash = await settleRail(client, {
  railId: 1n,
})

// Settle rail up to a specific epoch
const hash2 = await settleRail(client, {
  railId: 1n,
  untilEpoch: 1000n,
})

console.log(hash)
```

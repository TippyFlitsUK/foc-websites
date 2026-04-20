---
title: fundSync
next: true
prev: true
editUrl: false

---

> **fundSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/fund.ts:144](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/fund.ts#L144)

Smart deposit and wait for confirmation

Calls [fund](/reference/filoz/synapse-core/pay/functions/fund/) and waits for the transaction receipt.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/optionstype/) | [fundSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)\>

The transaction hash and receipt [fundSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)

## Throws

Errors [fundSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/errortype/)

## Example

```ts
import { fundSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { hash, receipt } = await fundSync(client, {
  amount: parseUnits('100', 18),
  onHash: (hash) => console.log('Transaction sent:', hash),
})

if (receipt) {
  console.log('Confirmed in block:', receipt.blockNumber)
}
```

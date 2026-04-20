---
title: terminateServiceSync
next: true
prev: true
editUrl: false

---

> **terminateServiceSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/terminate-service.ts:125](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/terminate-service.ts#L125)

Terminate a service (data set) and wait for confirmation

This function terminates a data set service, which will also result in the removal of all pieces in the data set.
Waits for the transaction to be confirmed and returns the receipt with the ServiceTerminated event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to terminate the service. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `dataSetId`: `bigint`; `onHash?`: (`hash`) => `void`; \} | [terminateServiceSync.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Warm storage contract address. If not provided, the default is the storage contract address for the chain. |
| `options.dataSetId` | `bigint` | The ID of the data set to terminate. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [terminateServiceSync.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/type-aliases/outputtype/)

## Throws

Errors [terminateServiceSync.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/type-aliases/errortype/)

## Example

```ts
import { terminateServiceSync } from '@filoz/synapse-core/warm-storage'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await terminateServiceSync(client, {
  dataSetId: 1n,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Data set ID:', event.args.dataSetId)
```

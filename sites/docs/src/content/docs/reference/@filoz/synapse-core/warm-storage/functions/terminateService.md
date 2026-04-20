---
title: terminateService
next: true
prev: true
editUrl: false

---

> **terminateService**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/warm-storage/terminate-service.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/terminate-service.ts#L66)

Terminate a service (data set)

This function terminates a data set service, which will also result in the removal of all pieces in the data set.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to terminate the service. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservice/type-aliases/optionstype/) | [terminateService.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservice/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [terminateService.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservice/type-aliases/outputtype/)

## Throws

Errors [terminateService.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservice/type-aliases/errortype/)

## Example

```ts
import { terminateService } from '@filoz/synapse-core/warm-storage'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const txHash = await terminateService(client, {
  dataSetId: 1n,
})

console.log(txHash)
```

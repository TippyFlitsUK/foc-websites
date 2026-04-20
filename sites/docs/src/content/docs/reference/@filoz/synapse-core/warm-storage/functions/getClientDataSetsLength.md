---
title: getClientDataSetsLength
next: true
prev: true
editUrl: false

---

> **getClientDataSetsLength**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets-length.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets-length.ts#L62)

Get total count of client data sets

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set count. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslength/type-aliases/optionstype/) | [getClientDataSetsLength.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslength/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Total count of data sets [getClientDataSetsLength.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslength/type-aliases/outputtype/)

## Throws

Errors [getClientDataSetsLength.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslength/type-aliases/errortype/)

## Example

```ts
import { getClientDataSetsLength } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const count = await getClientDataSetsLength(client, {
  address: '0x0000000000000000000000000000000000000000',
})

console.log(count)
```

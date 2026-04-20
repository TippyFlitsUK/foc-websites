---
title: getPdpDataSet
next: true
prev: true
editUrl: false

---

> **getPdpDataSet**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-pdp-data-set.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-pdp-data-set.ts#L56)

Get a PDP data set by ID

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the PDP data set. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/optionstype/) | [getPdpDataSet.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/outputtype/)\>

PDP data set or undefined if the data set does not exist [getPdpDataSet.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/outputtype/)

## Throws

Errors [getPdpDataSet.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/type-aliases/errortype/)

## Example

```ts
import { getPdpDataSet } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const dataSet = await getPdpDataSet(client, {
  dataSetId: 1n,
})

if (dataSet) {
  console.log(dataSet.dataSetId)
} else {
  console.log('Data set does not exist')
}
```

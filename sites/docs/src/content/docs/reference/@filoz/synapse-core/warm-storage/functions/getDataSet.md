---
title: getDataSet
next: true
prev: true
editUrl: false

---

> **getDataSet**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-data-set.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-data-set.ts#L66)

Get a data set by ID

Use [getPdpDataSet](/reference/filoz/synapse-core/warm-storage/functions/getpdpdataset/) instead to get PDP data sets.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/optionstype/) | [getDataSet.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)\>

Data set info or undefined if the data set does not exist [getDataSet.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)

## Throws

Errors [getDataSet.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/errortype/)

## Example

```ts
import { getDataSet } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const dataSet = await getDataSet(client, {
  dataSetId: 1n,
})

if (dataSet) {
  console.log(dataSet.dataSetId)
} else {
  console.log('Data set does not exist')
}
```

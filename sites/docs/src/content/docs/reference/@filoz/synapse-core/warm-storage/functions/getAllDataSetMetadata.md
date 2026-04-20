---
title: getAllDataSetMetadata
next: true
prev: true
editUrl: false

---

> **getAllDataSetMetadata**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-all-data-set-metadata.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-data-set-metadata.ts#L61)

Get all metadata for a data set formatted as a MetadataObject

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set metadata. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/optionstype/) | [getAllDataSetMetadata.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)\>

The metadata formatted as a MetadataObject [getAllDataSetMetadata.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/outputtype/)

## Throws

Errors [getAllDataSetMetadata.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/errortype/)

## Example

```ts
import { getAllDataSetMetadata } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const metadata = await getAllDataSetMetadata(client, {
  dataSetId: 1n,
})

console.log(metadata)
```

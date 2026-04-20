---
title: getAllPieceMetadata
next: true
prev: true
editUrl: false

---

> **getAllPieceMetadata**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L64)

Get all metadata for a piece formatted as a MetadataObject

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the piece metadata. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/optionstype/) | [getAllPieceMetadata.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)\>

The metadata formatted as a MetadataObject [getAllPieceMetadata.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/outputtype/)

## Throws

Errors [getAllPieceMetadata.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/errortype/)

## Example

```ts
import { getAllPieceMetadata } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const metadata = await getAllPieceMetadata(client, {
  dataSetId: 1n,
  pieceId: 0n,
})

console.log(metadata)
```

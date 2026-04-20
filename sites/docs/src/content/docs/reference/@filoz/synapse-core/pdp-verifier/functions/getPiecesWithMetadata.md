---
title: getPiecesWithMetadata
next: true
prev: true
editUrl: false

---

> **getPiecesWithMetadata**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-pieces.ts:147](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-pieces.ts#L147)

Get pieces with metadata for a data set with pagination

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the active pieces. |
| `options` | \{ `address`: `` `0x${string}` ``; `contractAddress?`: `` `0x${string}` ``; `dataSet`: [`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/); `limit?`: `bigint`; `offset?`: `bigint`; \} | [getPiecesWithMetadata.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | The address of the user. |
| `options.contractAddress?` | `` `0x${string}` `` | PDP Verifier contract address. If not provided, the default is the PDP Verifier contract address for the chain. |
| `options.dataSet` | [`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/) | The data set to get the pieces from. |
| `options.limit?` | `bigint` | The limit for pagination. **Default** `100n` |
| `options.offset?` | `bigint` | The offset for pagination. **Default** `0n` |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/type-aliases/outputtype/)\>

The active pieces for the data set [getPiecesWithMetadata.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/type-aliases/outputtype/)

## Example

```ts
import { getPiecesWithMetadata } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const [piecesData, pieceIds, hasMore] = await getPiecesWithMetadata(client, {
  dataSetId: 1n,
})
```

## Throws

Errors [getPiecesWithMetadata.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/type-aliases/errortype/)

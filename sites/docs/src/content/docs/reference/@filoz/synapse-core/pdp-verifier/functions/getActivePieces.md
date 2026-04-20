---
title: getActivePieces
next: true
prev: true
editUrl: false

---

> **getActivePieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:68](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L68)

Get active pieces for a data set with pagination does NOT account for removals

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the active pieces. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/optionstype/) | [getActivePieces.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)\>

The active pieces for the data set [getActivePieces.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)

## Example

```ts
import { getActivePieces } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const [piecesData, pieceIds, hasMore] = await getActivePieces(client, {
  dataSetId: 1n,
})
```

## Throws

Errors [getActivePieces.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/errortype/)

---
title: waitForAddPieces
next: true
prev: true
editUrl: false

---

> **waitForAddPieces**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `addMessageOk`: `true`; `confirmedPieceIds`: `bigint`[]; `dataSetId`: `bigint`; `pieceCount`: `number`; `piecesAdded`: `true`; `txHash`: `` `0x${string}` ``; `txStatus`: `"confirmed"`; \}\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:208](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L208)

Wait for the add pieces status.

GET /pdp/data-sets/{dataSetId}/pieces/added/{txHash}

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/waitforaddpieces/type-aliases/optionstype/) | [waitForAddPieces.OptionsType](/reference/filoz/synapse-core/sp/namespaces/waitforaddpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `addMessageOk`: `true`; `confirmedPieceIds`: `bigint`[]; `dataSetId`: `bigint`; `pieceCount`: `number`; `piecesAdded`: `true`; `txHash`: `` `0x${string}` ``; `txStatus`: `"confirmed"`; \}\>

Status [waitForAddPieces.OutputType](/reference/filoz/synapse-core/sp/namespaces/waitforaddpieces/type-aliases/outputtype/)

## Throws

Errors [waitForAddPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/waitforaddpieces/type-aliases/errortype/)

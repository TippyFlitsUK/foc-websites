---
title: deletePiece
next: true
prev: true
editUrl: false

---

> **deletePiece**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L29)

Delete a piece from a data set on the PDP API.

DELETE /pdp/data-sets/{dataSetId}/pieces/{pieceId}

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/optionstype/) | [deletePiece.OptionsType](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/outputtype/)\>

Hash of the delete operation [deletePiece.OutputType](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/outputtype/)

## Throws

Errors [deletePiece.ErrorType](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/errortype/)

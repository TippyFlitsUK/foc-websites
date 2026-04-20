---
title: findPiece
next: true
prev: true
editUrl: false

---

> **findPiece**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PieceLink`\>

Defined in: [packages/synapse-core/src/sp/find-piece.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L34)

Find a piece on the PDP API.

GET /pdp/piece?pieceCid={pieceCid}

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/findpiece/type-aliases/optionstype/) | [findPiece.OptionsType](/reference/filoz/synapse-core/sp/namespaces/findpiece/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PieceLink`\>

Piece CID [findPiece.OutputType](/reference/filoz/synapse-core/sp/namespaces/findpiece/type-aliases/outputtype/)

## Throws

Errors [findPiece.ErrorType](/reference/filoz/synapse-core/sp/namespaces/findpiece/type-aliases/errortype/)

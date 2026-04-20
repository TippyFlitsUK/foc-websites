---
title: calculate
next: true
prev: true
editUrl: false

---

> **calculate**(`data`): `PieceLink`

Defined in: [packages/synapse-core/src/piece/piece.ts:140](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L140)

Calculate the PieceCID (Piece Commitment) for a given data blob

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | The binary data to calculate the PieceCID for |

## Returns

`PieceLink`

The calculated PieceCID CID

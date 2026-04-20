---
title: getSizeFromPieceCID
next: true
prev: true
editUrl: false

---

> **getSizeFromPieceCID**(`pieceCidInput`): `number`

Defined in: [packages/synapse-core/src/piece/piece.ts:99](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L99)

Extract the raw (unpadded) size from a PieceCIDv2

Accepts PieceCID as string, CID object, or PieceCID type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pieceCidInput` | `string` \| `PieceLink` \| `CID`\<`unknown`, `number`, `number`, `Version`\> | PieceCID as either a CID object or string |

## Returns

`number`

The raw size in bytes

## Throws

If the input is not a valid PieceCIDv2

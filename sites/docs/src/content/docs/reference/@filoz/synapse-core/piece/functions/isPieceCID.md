---
title: isPieceCID
next: true
prev: true
editUrl: false

---

> **isPieceCID**(`cid`): `cid is PieceLink`

Defined in: [packages/synapse-core/src/piece/piece.ts:124](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L124)

Check if a CID is a valid PieceCIDv2

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cid` | `CID`\<`unknown`, `number`, `number`, `Version`\> \| `Link`\<`unknown`, `number`, `number`, `1`\> | The CID to check |

## Returns

`cid is PieceLink`

True if it's a valid PieceCIDv2

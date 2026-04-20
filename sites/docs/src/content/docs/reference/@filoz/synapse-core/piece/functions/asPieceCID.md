---
title: asPieceCID
next: true
prev: true
editUrl: false

---

> **asPieceCID**(`pieceCidInput`): `PieceLink` \| `null`

Defined in: [packages/synapse-core/src/piece/piece.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L41)

Convert a PieceCID input (string or CID) to a validated CID
This is the main function to use when accepting PieceCID inputs

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pieceCidInput` | `string` \| `PieceLink` \| `CID`\<`unknown`, `number`, `number`, `Version`\> \| `null` \| `undefined` | PieceCID as either a CID object or string |

## Returns

`PieceLink` \| `null`

The validated PieceCID CID or null if not a valid PieceCID

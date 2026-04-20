---
title: hexToPieceCID
next: true
prev: true
editUrl: false

---

> **hexToPieceCID**(`pieceCidHex`): `PieceLink`

Defined in: [packages/synapse-core/src/piece/piece.ts:232](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L232)

Convert a hex representation of a PieceCID to a PieceCID object

The contract stores the full PieceCID multihash digest (including height and padding)
The data comes as a hex string, we need to decode it as bytes then as a CID to get the PieceCID object

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pieceCidHex` | `string` | The hex representation of the PieceCID |

## Returns

`PieceLink`

The PieceCID object

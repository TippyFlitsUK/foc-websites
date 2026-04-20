---
title: getSize
next: true
prev: true
editUrl: false

---

> **getSize**(`pieceCid`): `number`

Defined in: [packages/synapse-core/src/piece/piece.ts:72](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L72)

Extract the raw (unpadded) size from a PieceCIDv2

PieceCIDv2 encodes the original data size in its multihash digest through
the tree height and padding values. This function decodes those values to
calculate the original raw data size.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pieceCid` | `PieceLink` | PieceCID |

## Returns

`number`

The raw size in bytes

## Throws

If the input is not a valid PieceCIDv2

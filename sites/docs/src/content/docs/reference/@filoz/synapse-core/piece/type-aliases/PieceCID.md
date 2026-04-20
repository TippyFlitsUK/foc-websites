---
title: PieceCID
next: true
prev: true
editUrl: false

---

> **PieceCID** = `PieceCIDType`

Defined in: [packages/synapse-core/src/piece/piece.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L33)

PieceCID - A constrained CID type for Piece Commitments.
This is implemented as a Link type which is made concrete by a CID. A
PieceCID uses the raw codec (0x55) and the fr32-sha256-trunc254-padbintree
multihash function (0x1011) which encodes the base content length (as
padding) of the original piece, and the height of the merkle tree used to
hash it.

See https://github.com/filecoin-project/FIPs/blob/master/FRCs/frc-0069.md
for more information.

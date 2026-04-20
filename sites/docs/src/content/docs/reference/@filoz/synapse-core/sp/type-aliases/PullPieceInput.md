---
title: PullPieceInput
next: true
prev: true
editUrl: false

---

> **PullPieceInput** = `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:227](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L227)

Input piece for a pull request with typed PieceCID.

## Properties

### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:233](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L233)

Optional metadata for the piece

***

### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:229](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L229)

PieceCID for the piece

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:231](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L231)

HTTPS URL to pull the piece from (must end in /piece/{pieceCid})

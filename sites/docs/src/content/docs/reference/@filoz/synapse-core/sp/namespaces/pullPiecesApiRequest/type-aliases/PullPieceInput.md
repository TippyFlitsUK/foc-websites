---
title: PullPieceInput
next: true
prev: true
editUrl: false

---

> **PullPieceInput** = `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L36)

Input piece for a pull request.

## Properties

### pieceCid

> **pieceCid**: `string`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L38)

PieceCIDv2 format (encodes both CommP and raw size)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L40)

HTTPS URL to pull the piece from (must end in /piece/{pieceCid})

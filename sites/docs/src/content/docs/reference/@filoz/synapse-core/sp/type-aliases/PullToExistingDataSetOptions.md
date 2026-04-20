---
title: PullToExistingDataSetOptions
next: true
prev: true
editUrl: false

---

> **PullToExistingDataSetOptions** = [`BasePullPiecesOptions`](/reference/filoz/synapse-core/sp/type-aliases/basepullpiecesoptions/) & `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:257](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L257)

Options for pulling pieces into an existing data set.

## Type Declaration

### clientDataSetId

> **clientDataSetId**: `bigint`

The client data set ID (used for signing).

### dataSetId

> **dataSetId**: `bigint`

The ID of the existing data set to add pieces to.

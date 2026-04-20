---
title: PullToNewDataSetOptions
next: true
prev: true
editUrl: false

---

> **PullToNewDataSetOptions** = [`BasePullPiecesOptions`](/reference/filoz/synapse-core/sp/type-aliases/basepullpiecesoptions/) & `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:267](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L267)

Options for creating a new data set and pulling pieces into it.

## Type Declaration

### cdn?

> `optional` **cdn?**: `boolean`

Whether the data set should use CDN.

### clientDataSetId?

> `optional` **clientDataSetId?**: `bigint`

The client data set ID. Must be unique for each data set. If not provided, a random value is generated.

### dataSetId?

> `optional` **dataSetId?**: `0n`

Omit or set to 0n to create a new data set.

### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

The metadata for the data set.

### payee

> **payee**: `Address`

The address that will receive payments (service provider). Required for new data sets.

### payer?

> `optional` **payer?**: `Address`

The address that will pay for the storage (client). If not provided, the default is the client address.
If client is from a session key this should be set to the actual payer address.

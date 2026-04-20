---
title: CreateDataSetAndAddPiecesOptions
next: true
prev: true
editUrl: false

---

> **CreateDataSetAndAddPiecesOptions** = `object`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:94](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L94)

## Properties

### cdn?

> `optional` **cdn?**: `boolean`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:114](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L114)

Whether the data set should use CDN.

***

### clientDataSetId?

> `optional` **clientDataSetId?**: `bigint`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:110](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L110)

The client data set id (nonce) to use for the signature. Must be unique for each data set.

***

### extraData?

> `optional` **extraData?**: `Hex`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:112](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L112)

Pre-built signed extraData. When provided, skips internal EIP-712 signing.

***

### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:108](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L108)

The metadata for the data set.

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:98](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L98)

The address that will receive payments (service provider).

***

### payer?

> `optional` **payer?**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:106](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L106)

The address that will pay for the storage (client). If not provided, the default is the client address.

If client is from a session key this should be set to the actual payer address

***

### pieces

> **pieces**: `object`[]

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:100](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L100)

The pieces and metadata to add to the data set.

#### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

#### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

***

### recordKeeper?

> `optional` **recordKeeper?**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:116](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L116)

The address of the record keeper to use for the signature. If not provided, the default is the Warm Storage contract address.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:96](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L96)

The service URL of the PDP API.

---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L39)

## Properties

### clientDataSetId?

> `optional` **clientDataSetId?**: `bigint`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L41)

The client data set id (nonce) to use for the signature.

***

### metadata?

> `optional` **metadata?**: [`MetadataEntry`](/reference/filoz/synapse-core/typed-data/type-aliases/metadataentry/)[]

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:47](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L47)

Dataset metadata.

***

### nonce?

> `optional` **nonce?**: `bigint`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L51)

The nonce to use for the add pieces signature.

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L43)

The payee address to use for the signature.

***

### payer?

> `optional` **payer?**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L45)

The payer address to use for the signature. If client is from a session key this should be set to the actual payer address.

***

### pieces

> **pieces**: `object`[]

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L49)

The pieces with metadata to sign.

#### metadata?

> `optional` **metadata?**: [`MetadataEntry`](/reference/filoz/synapse-core/typed-data/type-aliases/metadataentry/)[]

#### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

***

### verifyingContract?

> `optional` **verifyingContract?**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L53)

The verifying contract to use. If not provided, the default is the FilecoinWarmStorageService contract address.

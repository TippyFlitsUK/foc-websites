---
title: SignAddPiecesOptions
next: true
prev: true
editUrl: false

---

> **SignAddPiecesOptions** = `object`

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L19)

## Properties

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L21)

The client data set id to use for the signature.

***

### nonce?

> `optional` **nonce?**: `bigint`

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L25)

The nonce to use for the signature.

***

### pieces

> **pieces**: `object`[]

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L23)

The pieces to sign.

#### metadata?

> `optional` **metadata?**: [`MetadataEntry`](/reference/filoz/synapse-core/typed-data/type-aliases/metadataentry/)[]

#### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

***

### verifyingContract?

> `optional` **verifyingContract?**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L27)

The verifying contract to use. If not provided, the default is the FilecoinWarmStorageService contract address.

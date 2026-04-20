---
title: signCreateDataSetOptions
next: true
prev: true
editUrl: false

---

> **signCreateDataSetOptions** = `object`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L17)

## Properties

### clientDataSetId?

> `optional` **clientDataSetId?**: `bigint`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L19)

The client data set id (nonce).

***

### metadata?

> `optional` **metadata?**: [`MetadataEntry`](/reference/filoz/synapse-core/typed-data/type-aliases/metadataentry/)[]

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L25)

The metadata for the data set.

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L21)

The payee address.

***

### payer?

> `optional` **payer?**: `Address`

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L23)

The payer address. If client is from a session key this should be set to the actual payer address.

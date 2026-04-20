---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:93](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L93)

## Properties

### cdn

> **cdn**: `boolean`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:95](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L95)

Whether the data set should use CDN.

***

### clientDataSetId?

> `optional` **clientDataSetId?**: `bigint`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:108](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L108)

The client data set id (nonce) to use for the signature. Must be unique for each data set.

***

### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:106](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L106)

The metadata for the data set.

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:97](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L97)

The address that will receive payments (service provider).

***

### payer?

> `optional` **payer?**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:104](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L104)

The address that will pay for the storage (client). If not provided, the default is the client address.
If client is from a session key this should be set to the actual payer address

***

### recordKeeper?

> `optional` **recordKeeper?**: `Address`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:110](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L110)

The address of the record keeper to use for the signature. If not provided, the default is the Warm Storage contract address.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:99](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L99)

The service URL of the PDP API.

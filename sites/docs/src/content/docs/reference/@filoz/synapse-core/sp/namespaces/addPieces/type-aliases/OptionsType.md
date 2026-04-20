---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:91](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L91)

## Properties

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:97](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L97)

The ID of the client data set.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:95](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L95)

The ID of the data set.

***

### extraData?

> `optional` **extraData?**: `Hex`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:103](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L103)

Pre-built signed extraData. When provided, skips internal EIP-712 signing.

***

### nonce?

> `optional` **nonce?**: `bigint`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:101](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L101)

Optional nonce for the add pieces signature. Ignored when extraData is provided.

***

### pieces

> **pieces**: [`PieceType`](/reference/filoz/synapse-core/sp/namespaces/addpieces/type-aliases/piecetype/)[]

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:99](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L99)

The pieces to add.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:93](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L93)

The service URL of the PDP API.

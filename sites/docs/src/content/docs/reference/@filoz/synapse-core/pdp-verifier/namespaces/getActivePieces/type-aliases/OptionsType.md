---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L18)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L26)

PDP Verifier contract address. If not provided, the default is the PDP Verifier contract address for the chain.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L20)

The ID of the data set to get active pieces for.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L24)

The limit for pagination.

#### Default

```ts
100n
```

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L22)

The offset for pagination.

#### Default

```ts
0n
```

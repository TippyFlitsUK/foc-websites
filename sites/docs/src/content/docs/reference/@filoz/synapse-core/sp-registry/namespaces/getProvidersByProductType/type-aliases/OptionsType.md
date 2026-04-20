---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L17)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L27)

Service Provider Registry contract address. If not provided, the default is the ServiceProviderRegistry contract address for the chain.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L25)

Maximum number of results to return. Defaults to 50.

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L23)

Starting index for pagination (0-based). Defaults to 0.

***

### onlyActive?

> `optional` **onlyActive?**: `boolean`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L21)

If true, return only active providers with active products. Defaults to true.

***

### productType

> **productType**: `number`

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L19)

The product type to filter by.

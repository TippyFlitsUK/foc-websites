---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp-registry/remove-product.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-product.ts#L23)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/sp-registry/remove-product.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-product.ts#L27)

Service provider registry contract address. If not provided, the default is the registry contract address for the chain.

***

### productType?

> `optional` **productType?**: `number`

Defined in: [packages/synapse-core/src/sp-registry/remove-product.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-product.ts#L25)

The product type to remove (0 for PDP). Defaults to 0.

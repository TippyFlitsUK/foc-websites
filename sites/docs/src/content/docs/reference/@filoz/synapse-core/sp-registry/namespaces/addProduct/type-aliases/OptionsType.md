---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L25)

## Properties

### capabilities?

> `optional` **capabilities?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L31)

Additional capabilities as key-value pairs. Optional.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L33)

Service provider registry contract address. If not provided, the default is the registry contract address for the chain.

***

### pdpOffering

> **pdpOffering**: [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L29)

The PDP offering details

***

### productType?

> `optional` **productType?**: `number`

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L27)

The product type to add (0 for PDP). Defaults to 0.

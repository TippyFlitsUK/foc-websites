---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L25)

## Properties

### capabilities?

> `optional` **capabilities?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L37)

Additional capabilities as key-value pairs. Optional.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L41)

Service provider registry contract address. If not provided, the default is the registry contract address for the chain.

***

### description

> **description**: `string`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L31)

The description of the service provider

***

### name

> **name**: `string`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L29)

The name of the service provider

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L27)

The address that will receive payments for this provider

***

### pdpOffering

> **pdpOffering**: [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L35)

The PDP offering details

***

### productType?

> `optional` **productType?**: `number`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L33)

The product type to register (0 for PDP). Defaults to 0.

***

### value?

> `optional` **value?**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L39)

The registration fee value. If not provided, will be fetched from the contract.

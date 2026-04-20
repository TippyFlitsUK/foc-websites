---
title: ProviderSelectionResult
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:740](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L740)

Result of provider selection and data set resolution

## Properties

### dataSetId

> **dataSetId**: `bigint` \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:744](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L744)

Selected data set ID, or null if a new data set will be created on commit

***

### dataSetMetadata

> **dataSetMetadata**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:746](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L746)

Data set metadata

***

### provider

> **provider**: [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)

Defined in: [packages/synapse-sdk/src/types.ts:742](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L742)

Selected service provider

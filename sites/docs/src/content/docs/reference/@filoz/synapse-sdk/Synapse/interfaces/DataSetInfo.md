---
title: DataSetInfo
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:209](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L209)

Data set information returned from Warm Storage contract

## Extended by

- [`EnhancedDataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)

## Properties

### cacheMissRailId

> **cacheMissRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:213](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L213)

For CDN add-on: ID of the cache miss payment rail

***

### cdnRailId

> **cdnRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:215](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L215)

For CDN add-on: ID of the CDN payment rail

***

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:225](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L225)

Client's sequential dataset ID within this Warm Storage contract

***

### commissionBps

> **commissionBps**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:223](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L223)

Commission rate in basis points (dynamic based on CDN usage)

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:233](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L233)

PDP Data Set ID

***

### payee

> **payee**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:219](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L219)

SP's beneficiary address

***

### payer

> **payer**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:217](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L217)

Address paying for storage

***

### paymentEndEpoch?

> `optional` **paymentEndEpoch?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:231](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L231)

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:227](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L227)

Epoch when PDP payments end (0 if not terminated)

***

### pdpRailId

> **pdpRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:211](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L211)

ID of the PDP payment rail

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:229](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L229)

Provider ID from the ServiceProviderRegistry

***

### serviceProvider

> **serviceProvider**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:221](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L221)

Service provider address (operator)

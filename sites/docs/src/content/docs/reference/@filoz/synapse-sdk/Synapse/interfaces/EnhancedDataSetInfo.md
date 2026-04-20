---
title: EnhancedDataSetInfo
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:239](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L239)

Enhanced data set information with chain details and clear ID separation

## Extends

- [`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/)

## Properties

### activePieceCount

> **activePieceCount**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:243](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L243)

Number of active pieces in the data set (excludes removed pieces)

***

### cacheMissRailId

> **cacheMissRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:213](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L213)

For CDN add-on: ID of the cache miss payment rail

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`cacheMissRailId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#cachemissrailid)

***

### cdnRailId

> **cdnRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:215](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L215)

For CDN add-on: ID of the CDN payment rail

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`cdnRailId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#cdnrailid)

***

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:225](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L225)

Client's sequential dataset ID within this Warm Storage contract

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`clientDataSetId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#clientdatasetid)

***

### commissionBps

> **commissionBps**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:223](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L223)

Commission rate in basis points (dynamic based on CDN usage)

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`commissionBps`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#commissionbps)

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:233](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L233)

PDP Data Set ID

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`dataSetId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#datasetid)

***

### isLive

> **isLive**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:245](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L245)

Whether the data set is live on-chain

***

### isManaged

> **isManaged**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:247](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L247)

Whether this data set is managed by the current Warm Storage contract

***

### metadata

> **metadata**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:251](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L251)

Metadata associated with this data set (key-value pairs)

***

### payee

> **payee**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:219](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L219)

SP's beneficiary address

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`payee`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#payee)

***

### payer

> **payer**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:217](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L217)

Address paying for storage

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`payer`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#payer)

***

### paymentEndEpoch?

> `optional` **paymentEndEpoch?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:231](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L231)

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`paymentEndEpoch`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#paymentendepoch)

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:227](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L227)

Epoch when PDP payments end (0 if not terminated)

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`pdpEndEpoch`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#pdpendepoch)

***

### pdpRailId

> **pdpRailId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:211](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L211)

ID of the PDP payment rail

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`pdpRailId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#pdprailid)

***

### pdpVerifierDataSetId

> **pdpVerifierDataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:241](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L241)

PDPVerifier global data set ID

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:229](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L229)

Provider ID from the ServiceProviderRegistry

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`providerId`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#providerid)

***

### serviceProvider

> **serviceProvider**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:221](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L221)

Service provider address (operator)

#### Inherited from

[`DataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/).[`serviceProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/#serviceprovider)

***

### withCDN

> **withCDN**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:249](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L249)

Whether the data set is using CDN (cdnRailId > 0 and withCDN metadata key present)

---
title: SelectionDataSet
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L13)

Dataset with piece count, for provider selection.

Picks the fields that selectProviders() and findMatchingDataSets()
need, plus activePieceCount which is fetched separately via multicall.

Core callers can spread a PdpDataSet directly: `{ ...ds, activePieceCount }`.
SDK callers map from EnhancedDataSetInfo (different field names).

## Properties

### activePieceCount

> **activePieceCount**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L21)

Number of active pieces in the dataset (0 = empty)

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L15)

PDP Verifier data set ID

***

### live

> **live**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L25)

Whether the data set is live in the PDP Verifier

***

### managed

> **managed**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L27)

Whether the data set is managed by the current Warm Storage contract

***

### metadata

> **metadata**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L19)

Data set metadata (key-value pairs)

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L23)

End epoch for PDP service (0 = active)

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L17)

Provider that owns this data set

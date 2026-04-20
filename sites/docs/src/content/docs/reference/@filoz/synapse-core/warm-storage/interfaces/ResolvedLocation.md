---
title: ResolvedLocation
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L70)

A resolved provider+dataset pair ready for upload.

The currency between selection and upload. selectProviders() returns
an array of these; the caller passes them to upload/pull/commit functions.

## Properties

### dataSetId

> **dataSetId**: `bigint` \| `null`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:74](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L74)

Matched dataset ID, or null if a new dataset should be created

***

### dataSetMetadata

> **dataSetMetadata**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:78](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L78)

Dataset metadata (matched from existing dataset, or the requested metadata for new datasets)

***

### endorsed

> **endorsed**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:76](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L76)

Whether this provider is endorsed

***

### provider

> **provider**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:72](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L72)

The selected provider

---
title: ProviderSelectionOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:55](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L55)

Options for selectProviders(). Combines pre-fetched chain data
with selection parameters in a single argument.

## Extends

- [`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/)

## Properties

### clientDataSets

> **clientDataSets**: [`SelectionDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/)[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L48)

Client's existing datasets with metadata and piece counts

#### Inherited from

[`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/).[`clientDataSets`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/#clientdatasets)

***

### count?

> `optional` **count?**: `number`

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:57](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L57)

Number of providers to select (default: 1)

***

### endorsedIds

> **endorsedIds**: `bigint`[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L46)

Array of endorsed provider IDs (from endorsements.getProviderIds).
 Non-empty = restrict to endorsed only. Empty = use all providers.

#### Inherited from

[`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/).[`endorsedIds`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/#endorsedids)

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:59](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L59)

Provider IDs to exclude (for retry after ping failure or multi-copy exclusion)

***

### metadata?

> `optional` **metadata?**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L61)

Desired metadata for dataset matching (empty object matches only empty-metadata datasets)

***

### providers

> **providers**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L43)

Available PDP providers (typically from getApprovedPDPProviders)

#### Inherited from

[`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/).[`providers`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/#providers)

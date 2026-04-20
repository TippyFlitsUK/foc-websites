---
title: ProviderSelectionInput
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L41)

Pre-fetched data for provider selection.

The caller gathers this from chain queries (or cached results)
and passes it to selectProviders(). Separating data fetching
from selection keeps selectProviders() pure and testable.

The `endorsedIds` array controls pool restriction:
- Non-empty: only providers in this set are considered (primary selection)
- Empty: all providers in the `providers` list are considered (secondary selection)

## Extended by

- [`ProviderSelectionOptions`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectionoptions/)

## Properties

### clientDataSets

> **clientDataSets**: [`SelectionDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/)[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L48)

Client's existing datasets with metadata and piece counts

***

### endorsedIds

> **endorsedIds**: `bigint`[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L46)

Array of endorsed provider IDs (from endorsements.getProviderIds).
 Non-empty = restrict to endorsed only. Empty = use all providers.

***

### providers

> **providers**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)[]

Defined in: [packages/synapse-core/src/warm-storage/location-types.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/location-types.ts#L43)

Available PDP providers (typically from getApprovedPDPProviders)

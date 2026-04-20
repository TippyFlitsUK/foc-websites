---
title: selectProviders
next: true
prev: true
editUrl: false

---

> **selectProviders**(`options`): [`ResolvedLocation`](/reference/filoz/synapse-core/warm-storage/interfaces/resolvedlocation/)[]

Defined in: [packages/synapse-core/src/warm-storage/select-providers.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/select-providers.ts#L27)

Select providers for storage from an eligible pool.

The eligible provider pool is determined by `endorsedIds`:
- Non-empty: only providers in this set are considered (use for primary selection)
- Empty: all providers in the `providers` list are considered (use for secondary selection)

Within the eligible pool, providers with an existing metadata-matching
dataset are preferred (reuses payment rail). Otherwise a provider
without a matching dataset is selected (new dataset created on commit).

Within matching datasets, those with existing pieces sort before empty
ones, and older datasets (lower ID) sort before newer ones.

This function does NOT perform health checks — the caller should
validate reachability via SP.ping() and call again with
excludeProviderIds if a provider fails.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ProviderSelectionOptions`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectionoptions/) | Pre-fetched chain data and selection parameters |

## Returns

[`ResolvedLocation`](/reference/filoz/synapse-core/warm-storage/interfaces/resolvedlocation/)[]

Ranked array of locations up to `count` length.
  May be shorter if fewer providers are available.
  Empty if no providers match constraints.

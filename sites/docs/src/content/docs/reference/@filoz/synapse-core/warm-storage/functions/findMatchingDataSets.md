---
title: findMatchingDataSets
next: true
prev: true
editUrl: false

---

> **findMatchingDataSets**(`dataSets`, `metadata`): [`SelectionDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/)[]

Defined in: [packages/synapse-core/src/warm-storage/find-matching-data-sets.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/find-matching-data-sets.ts#L51)

Find datasets matching the given metadata, sorted by preference.

Matching is exact: a dataset matches only if its metadata keys and
values are identical to the requested metadata.

Only active datasets are considered (live, managed, pdpEndEpoch === 0n).

Sort order:
  1. Datasets with pieces (activePieceCount > 0) before empty datasets
  2. Within each group, older datasets (lower ID) first

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dataSets` | [`SelectionDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/)[] | Datasets to search (typically filtered to a single provider) |
| `metadata` | [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/) | Desired metadata keys and values |

## Returns

[`SelectionDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/)[]

Matching datasets in preference order

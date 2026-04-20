---
title: metadataMatches
next: true
prev: true
editUrl: false

---

> **metadataMatches**(`dataSetMetadata`, `requestedMetadata`): `boolean`

Defined in: [packages/synapse-core/src/warm-storage/find-matching-data-sets.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/find-matching-data-sets.ts#L14)

Check if a dataset's metadata exactly matches the requested metadata.

Both sets must have identical keys and values. Order does not matter.
An empty requested metadata matches only datasets with empty metadata.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dataSetMetadata` | [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/) | The metadata from the dataset |
| `requestedMetadata` | [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/) | The metadata to match against |

## Returns

`boolean`

true if metadata sets are exactly equal

---
title: PdpDataSetInfo
next: true
prev: true
editUrl: false

---

> **PdpDataSetInfo** = `object`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L36)

## Extended by

- [`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/)

## Properties

### activePieceCount

> **activePieceCount**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L48)

Number of active (non-zero) pieces in the data set.

***

### cdn

> **cdn**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L42)

Whether the data set is using CDN.

***

### live

> **live**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L38)

Whether the data set is live in the PDP Verifier contract.

***

### managed

> **managed**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L40)

Whether the data set is managed by the current Warm Storage contract.

***

### metadata

> **metadata**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/warm-storage/types.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L44)

Metadata associated with the data set.

***

### provider

> **provider**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

Defined in: [packages/synapse-core/src/warm-storage/types.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L46)

PDP provider associated with the data set.

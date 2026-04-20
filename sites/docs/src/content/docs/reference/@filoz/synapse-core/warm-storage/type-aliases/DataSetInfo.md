---
title: DataSetInfo
next: true
prev: true
editUrl: false

---

> **DataSetInfo** = `object`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L11)

Data set information returned from Warm Storage contract

## Extended by

- [`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/)

## Properties

### cacheMissRailId

> **cacheMissRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L15)

Payment rail ID for cache-miss egress.

***

### cdnRailId

> **cdnRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L17)

Payment rail ID for CDN egress.

***

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L27)

Client-provided data set ID (nonce).

***

### commissionBps

> **commissionBps**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L25)

Commission in basis points.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L33)

Data set ID.

***

### payee

> **payee**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L21)

Payee address for data set storage.

***

### payer

> **payer**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L19)

Payer address for data set storage.

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L29)

End epoch for PDP service.

***

### pdpRailId

> **pdpRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L13)

Payment rail ID for PDP proofs.

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L31)

Provider ID for the data set.

***

### serviceProvider

> **serviceProvider**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L23)

Service provider address.

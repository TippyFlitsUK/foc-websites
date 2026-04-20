---
title: ParamsType
next: true
prev: true
editUrl: false

---

> **ParamsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:4](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L4)

## Properties

### epochsPerMonth

> **epochsPerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L12)

Epochs per month from getServicePrice() (always 86400).

***

### minimumPricePerMonth

> **minimumPricePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:10](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L10)

Minimum monthly charge from getServicePrice().

***

### pricePerTiBPerMonth

> **pricePerTiBPerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:8](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L8)

Price per TiB per month from getServicePrice().

***

### sizeInBytes

> **sizeInBytes**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:6](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L6)

Total data size in the dataset (existing + new), in bytes.

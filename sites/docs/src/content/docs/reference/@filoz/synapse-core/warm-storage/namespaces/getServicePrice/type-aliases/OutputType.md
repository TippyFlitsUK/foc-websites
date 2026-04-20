---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L27)

The service price for the warm storage.

## Properties

### epochsPerMonth

> **epochsPerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L37)

Number of epochs per month

***

### minimumPricePerMonth

> **minimumPricePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L39)

Minimum monthly charge for any dataset size (in base units)

***

### pricePerTiBCacheMissEgress

> **pricePerTiBCacheMissEgress**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L33)

Cache miss egress price per TiB (usage-based, in base units)

***

### pricePerTiBCdnEgress

> **pricePerTiBCdnEgress**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L31)

CDN egress price per TiB (usage-based, in base units)

***

### pricePerTiBPerMonthNoCDN

> **pricePerTiBPerMonthNoCDN**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L29)

Price per TiB per month without CDN (in base units)

***

### tokenAddress

> **tokenAddress**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L35)

Token address for payments

---
title: ParamsType
next: true
prev: true
editUrl: false

---

> **ParamsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:72](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L72)

## Properties

### availableFunds

> **availableFunds**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:92](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L92)

***

### bufferEpochs?

> `optional` **bufferEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:98](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L98)

Safety margin in epochs for tx execution delay. Defaults to DEFAULT_BUFFER_EPOCHS (5).

***

### currentDataSetSize

> **currentDataSetSize**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:75](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L75)

***

### currentEpoch

> **currentEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:96](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L96)

***

### currentLockupRate

> **currentLockupRate**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:86](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L86)

***

### dataSize

> **dataSize**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:74](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L74)

***

### debt

> **debt**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:91](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L91)

***

### epochsPerMonth?

> `optional` **epochsPerMonth?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:79](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L79)

Epochs per month. Defaults to EPOCHS_PER_MONTH (86400).

***

### extraRunwayEpochs?

> `optional` **extraRunwayEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:88](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L88)

Extra runway epochs beyond the required lockup. Defaults to DEFAULT_RUNWAY_EPOCHS (0).

***

### fundedUntilEpoch

> **fundedUntilEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:93](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L93)

***

### isNewDataSet

> **isNewDataSet**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L82)

***

### lockupEpochs?

> `optional` **lockupEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:81](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L81)

Lockup period in epochs. Defaults to LOCKUP_PERIOD (30 days).

***

### minimumPricePerMonth

> **minimumPricePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:77](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L77)

***

### pricePerTiBPerMonth

> **pricePerTiBPerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:76](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L76)

***

### withCDN

> **withCDN**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:83](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L83)

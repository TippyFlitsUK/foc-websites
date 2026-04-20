---
title: ParamsType
next: true
prev: true
editUrl: false

---

> **ParamsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:5](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L5)

## Properties

### currentDataSetSize

> **currentDataSetSize**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L9)

Current total data size in the existing dataset, in bytes. 0n for new datasets.

***

### dataSize

> **dataSize**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L7)

Size of new data being uploaded, in bytes.

***

### epochsPerMonth?

> `optional` **epochsPerMonth?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L15)

Epochs per month. Defaults to EPOCHS_PER_MONTH (86400).

***

### isNewDataSet

> **isNewDataSet**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L19)

Whether a new dataset is being created (vs adding to existing).

***

### lockupEpochs?

> `optional` **lockupEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L17)

Lockup period in epochs. Defaults to LOCKUP_PERIOD (30 days).

***

### minimumPricePerMonth

> **minimumPricePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L13)

Minimum monthly charge from getServicePrice().

***

### pricePerTiBPerMonth

> **pricePerTiBPerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L11)

Price per TiB per month from getServicePrice().

***

### withCDN

> **withCDN**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L21)

Whether CDN is enabled for this dataset.

---
title: ParamsType
next: true
prev: true
editUrl: false

---

> **ParamsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:5](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L5)

## Properties

### extraRunwayEpochs

> **extraRunwayEpochs**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L9)

Extra runway epochs beyond the required lockup. 0n if not requested.

***

### netRateAfterUpload

> **netRateAfterUpload**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L7)

Projected account rate after this upload: currentLockupRate + rateDeltaPerEpoch.

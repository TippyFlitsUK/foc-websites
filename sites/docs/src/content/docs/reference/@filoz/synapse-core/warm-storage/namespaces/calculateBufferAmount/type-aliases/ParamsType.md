---
title: ParamsType
next: true
prev: true
editUrl: false

---

> **ParamsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L27)

## Properties

### availableFunds

> **availableFunds**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L37)

From resolveAccountState().availableFunds.

***

### bufferEpochs

> **bufferEpochs**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L39)

Safety margin in epochs.

***

### currentEpoch

> **currentEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L35)

Current epoch (block number).

***

### fundedUntilEpoch

> **fundedUntilEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L33)

From resolveAccountState().fundedUntilEpoch.

***

### netRateAfterUpload

> **netRateAfterUpload**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L31)

Projected account rate after this upload: currentLockupRate + rateDeltaPerEpoch.

***

### rawDepositNeeded

> **rawDepositNeeded**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L29)

additionalLockup + runwayAmount + debt - availableFunds (before clamping to 0).

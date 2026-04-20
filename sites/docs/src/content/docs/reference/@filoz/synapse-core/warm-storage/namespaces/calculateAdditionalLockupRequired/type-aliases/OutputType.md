---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L24)

## Properties

### cdnFixedLockup

> **cdnFixedLockup**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L30)

Fixed CDN lockup (only for new CDN datasets), 0 otherwise.

***

### rateDeltaPerEpoch

> **rateDeltaPerEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L26)

Per-epoch rate increase from this upload.

***

### rateLockupDelta

> **rateLockupDelta**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L28)

Lockup increase from the rate change = rateDeltaPerEpoch * lockupEpochs.

***

### sybilFee

> **sybilFee**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L32)

USDFC sybil fee (only for new datasets), 0 otherwise.

***

### total

> **total**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L34)

rateLockupDelta + cdnFixedLockup + sybilFee

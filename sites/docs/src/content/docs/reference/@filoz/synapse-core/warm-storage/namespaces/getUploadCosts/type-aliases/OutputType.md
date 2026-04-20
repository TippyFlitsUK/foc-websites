---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L33)

## Properties

### depositNeeded

> **depositNeeded**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L42)

Total USDFC to deposit. 0n if sufficient funds available.

***

### needsFwssMaxApproval

> **needsFwssMaxApproval**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L44)

Whether FWSS needs to be approved (or re-approved with maxUint256).

***

### rate

> **rate**: `object`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L35)

Effective rate for the dataset after adding dataSize bytes.

#### perEpoch

> **perEpoch**: `bigint`

Rate per epoch — matches on-chain PDP rail rate.

#### perMonth

> **perMonth**: `bigint`

Rate per month — full precision for display.

***

### ready

> **ready**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L46)

True when depositNeeded == 0n and needsFwssMaxApproval == false.

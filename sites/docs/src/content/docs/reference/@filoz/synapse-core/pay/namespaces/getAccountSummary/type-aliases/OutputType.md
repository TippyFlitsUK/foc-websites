---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L21)

## Properties

### availableFunds

> **availableFunds**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L25)

Funds available for withdrawal or new commitments

***

### debt

> **debt**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L27)

Outstanding debt (0n if healthy)

***

### epoch

> **epoch**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L44)

The epoch used for all calculations

***

### fundedUntilEpoch

> **fundedUntilEpoch**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L42)

Epoch at which funds run out at current rate

***

### funds

> **funds**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L23)

Total deposited funds in the contract

***

### lockupRatePerEpoch

> **lockupRatePerEpoch**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L30)

Per-epoch lockup rate (aggregate across all rails)

***

### lockupRatePerMonth

> **lockupRatePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L32)

Per-month lockup rate (lockupRatePerEpoch * EPOCHS_PER_MONTH)

***

### totalFixedLockup

> **totalFixedLockup**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L37)

Sum of lockupFixed across all rails (CDN deposits, etc.)

***

### totalLockup

> **totalLockup**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L35)

Total effective lockup at the given epoch (fixed + rate-based)

***

### totalRateBasedLockup

> **totalRateBasedLockup**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L39)

Rate-based portion of lockup (totalLockup - totalFixedLockup)

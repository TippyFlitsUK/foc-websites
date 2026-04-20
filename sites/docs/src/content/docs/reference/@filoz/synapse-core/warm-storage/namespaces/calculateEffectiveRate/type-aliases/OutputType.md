---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L15)

## Properties

### ratePerEpoch

> **ratePerEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L28)

Rate per epoch — matches the on-chain PDP rail rate.

The contract computes this as a single division:
  `(totalBytes * pricePerTiBPerMonth) / (TiB * EPOCHS_PER_MONTH)`

Because truncation depends on totalBytes, this value is only valid for
the exact size it was computed for — you cannot scale it linearly to
estimate costs for different sizes.

Use for: lockup calculations, on-chain comparisons.

***

### ratePerMonth

> **ratePerMonth**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L42)

Rate per month — preserves precision before epoch division.

Computed as `(totalBytes * pricePerTiBPerMonth) / TiB` (one fewer
division than ratePerEpoch), so it retains more precision and scales
linearly with size, making it suitable for display and cost estimation.

Note: this is slightly higher than `ratePerEpoch * epochsPerMonth`
(the actual on-chain monthly cost) due to integer truncation in the
per-epoch calculation.

Use for: display, cost comparisons across sizes.

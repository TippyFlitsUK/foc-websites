---
title: calculateEffectiveRate
next: true
prev: true
editUrl: false

---

> **calculateEffectiveRate**(`params`): [`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/warm-storage/calculate-effective-rate.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-effective-rate.ts#L65)

Mirror the contract's `_calculateStorageRate` with floor pricing.

Returns two rates for different use cases:
- `ratePerEpoch` — matches the on-chain rail rate (use for lockup math)
- `ratePerMonth` — higher precision, linearly scalable (use for display)

The contract multiplies `totalBytes * pricePerTiBPerMonth` before dividing
by `TiB * EPOCHS_PER_MONTH` in a single step, so `ratePerEpoch` depends on
the total size and cannot be scaled to estimate other sizes. `ratePerMonth`
avoids the epoch division, preserving that scalability.

On-chain reference:
- `_calculateStorageRate`: [https://github.com/FilOzone/filecoin-services/blob/053885eba807ed40a0e834c080606f4286ab4ef2/service\_contracts/src/FilecoinWarmStorageService.sol#L1388-L1397](https://github.com/FilOzone/filecoin-services/blob/053885eba807ed40a0e834c080606f4286ab4ef2/service_contracts/src/FilecoinWarmStorageService.sol#L1388-L1397)
- `calculateStorageSizeBasedRatePerEpoch`: [https://github.com/FilOzone/filecoin-services/blob/053885eba807ed40a0e834c080606f4286ab4ef2/service\_contracts/src/FilecoinWarmStorageService.sol#L1349-L1370](https://github.com/FilOzone/filecoin-services/blob/053885eba807ed40a0e834c080606f4286ab4ef2/service_contracts/src/FilecoinWarmStorageService.sol#L1349-L1370)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/type-aliases/paramstype/) | [calculateEffectiveRate.ParamsType](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/type-aliases/paramstype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/type-aliases/outputtype/)

[calculateEffectiveRate.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/type-aliases/outputtype/)

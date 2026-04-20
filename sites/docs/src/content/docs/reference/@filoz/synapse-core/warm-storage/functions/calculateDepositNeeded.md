---
title: calculateDepositNeeded
next: true
prev: true
editUrl: false

---

> **calculateDepositNeeded**(`params`): `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:108](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L108)

Orchestrate lockup + runway + debt + buffer to compute total deposit needed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculatedepositneeded/type-aliases/paramstype/) | [calculateDepositNeeded.ParamsType](/reference/filoz/synapse-core/warm-storage/namespaces/calculatedepositneeded/type-aliases/paramstype/) |

## Returns

`bigint`

The total deposit needed in token base units (0n if already sufficient)

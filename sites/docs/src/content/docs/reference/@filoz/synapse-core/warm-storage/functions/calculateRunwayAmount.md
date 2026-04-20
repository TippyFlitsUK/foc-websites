---
title: calculateRunwayAmount
next: true
prev: true
editUrl: false

---

> **calculateRunwayAmount**(`params`): `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L22)

Calculate extra funds to ensure the account stays funded beyond the lockup period.

Uses the net rate (current + delta from this upload) so the runway covers
the full drain rate after the new rail is created.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculaterunwayamount/type-aliases/paramstype/) | [calculateRunwayAmount.ParamsType](/reference/filoz/synapse-core/warm-storage/namespaces/calculaterunwayamount/type-aliases/paramstype/) |

## Returns

`bigint`

The runway amount in token base units

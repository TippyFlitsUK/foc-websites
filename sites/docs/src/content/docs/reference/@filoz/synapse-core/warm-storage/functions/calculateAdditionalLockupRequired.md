---
title: calculateAdditionalLockupRequired
next: true
prev: true
editUrl: false

---

> **calculateAdditionalLockupRequired**(`params`): [`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts:47](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-additional-lockup-required.ts#L47)

Compute how much additional lockup this upload requires.

Handles floor-to-floor transitions correctly: when both the current dataset size
and the new total size are below the floor threshold, the rate delta is 0.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/type-aliases/paramstype/) | [calculateAdditionalLockupRequired.ParamsType](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/type-aliases/paramstype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/type-aliases/outputtype/)

[calculateAdditionalLockupRequired.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/type-aliases/outputtype/)

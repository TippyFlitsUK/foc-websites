---
title: calculateBufferAmount
next: true
prev: true
editUrl: false

---

> **calculateBufferAmount**(`params`): `bigint`

Defined in: [packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/calculate-deposit-needed.ts#L52)

Calculate safety margin for epoch drift between balance check and tx execution.

Uses the net rate (current + delta) because in multi-context uploads, earlier
contexts create rails that start ticking before later contexts execute.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/warm-storage/namespaces/calculatebufferamount/type-aliases/paramstype/) | [calculateBufferAmount.ParamsType](/reference/filoz/synapse-core/warm-storage/namespaces/calculatebufferamount/type-aliases/paramstype/) |

## Returns

`bigint`

The buffer amount in token base units

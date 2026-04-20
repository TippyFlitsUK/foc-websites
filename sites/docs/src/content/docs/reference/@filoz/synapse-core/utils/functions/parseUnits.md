---
title: parseUnits
next: true
prev: true
editUrl: false

---

> **parseUnits**(`value`, `decimals?`): `bigint`

Defined in: [packages/synapse-core/src/utils/format.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L28)

Parse a value to a bigint.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `Dnum` | The value to parse. It can be a string, a number, a bigint, or a dnum. |
| `decimals?` | `number` | The number of decimals to parse. If not provided, the default is 18. |

## Returns

`bigint`

The parsed value as a bigint.

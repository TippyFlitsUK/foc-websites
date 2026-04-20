---
title: capabilitiesListToObject
next: true
prev: true
editUrl: false

---

> **capabilitiesListToObject**(`keys`, `values`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `Hex`\>

Defined in: [packages/synapse-core/src/utils/capabilities.ts:10](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/capabilities.ts#L10)

Convert capability arrays to object map

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | readonly `string`[] | Array of capability keys |
| `values` | readonly `` `0x${string}` ``[] | Array of capability values |

## Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `Hex`\>

Object map of capabilities

---
title: dateToEpoch
next: true
prev: true
editUrl: false

---

> **dateToEpoch**(`date`, `genesisTimestamp`): `number`

Defined in: [packages/synapse-core/src/utils/epoch.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/epoch.ts#L25)

Convert a JavaScript Date to a Filecoin epoch

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | The date to convert |
| `genesisTimestamp` | `number` | The genesis timestamp of the chain in seconds (Unix timestamp) |

## Returns

`number`

The epoch number (rounded down to nearest epoch)

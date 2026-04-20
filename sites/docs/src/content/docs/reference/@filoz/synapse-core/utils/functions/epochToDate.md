---
title: epochToDate
next: true
prev: true
editUrl: false

---

> **epochToDate**(`epoch`, `genesisTimestamp`): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [packages/synapse-core/src/utils/epoch.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/epoch.ts#L13)

Convert a Filecoin epoch to a JavaScript Date

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `epoch` | `number` | The epoch number to convert |
| `genesisTimestamp` | `number` | The genesis timestamp of the chain in seconds (Unix timestamp) |

## Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Date object representing the epoch time

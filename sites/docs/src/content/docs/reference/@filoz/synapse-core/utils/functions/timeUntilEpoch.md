---
title: timeUntilEpoch
next: true
prev: true
editUrl: false

---

> **timeUntilEpoch**(`futureEpoch`, `currentEpoch`): `object`

Defined in: [packages/synapse-core/src/utils/epoch.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/epoch.ts#L38)

Calculate the time until a future epoch

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `futureEpoch` | `number` | The future epoch number |
| `currentEpoch` | `number` | The current epoch number |

## Returns

`object`

Object with time until the epoch in various units

### days

> **days**: `number`

### epochs

> **epochs**: `number`

### hours

> **hours**: `number`

### minutes

> **minutes**: `number`

### seconds

> **seconds**: `number`

---
title: calculateLastProofDate
next: true
prev: true
editUrl: false

---

> **calculateLastProofDate**(`nextChallengeEpoch`, `maxProvingPeriod`, `genesisTimestamp`): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Defined in: [packages/synapse-core/src/utils/epoch.ts:67](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/epoch.ts#L67)

Calculate when the last proof should have been submitted based on current time

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nextChallengeEpoch` | `number` | The next challenge epoch from the data set |
| `maxProvingPeriod` | `number` | The maximum proving period in epochs |
| `genesisTimestamp` | `number` | The genesis timestamp of the chain in seconds (Unix timestamp) |

## Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Date when the last proof should have been submitted, or null if no proof submitted yet

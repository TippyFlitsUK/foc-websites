---
title: ActionSyncCallback
next: true
prev: true
editUrl: false

---

> **ActionSyncCallback** = `object`

Defined in: [packages/synapse-core/src/types.ts:16](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/types.ts#L16)

Action sync callback options

## Properties

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [packages/synapse-core/src/types.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/types.ts#L18)

Callback function called with the transaction hash before waiting for the receipt.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `Hash` |

#### Returns

`void`

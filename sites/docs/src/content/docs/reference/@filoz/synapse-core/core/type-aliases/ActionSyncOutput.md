---
title: ActionSyncOutput
next: true
prev: true
editUrl: false

---

> **ActionSyncOutput**\<`ExtractFn`, `chain`\> = `object`

Defined in: [packages/synapse-core/src/types.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/types.ts#L22)

Action sync output type

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `ExtractFn` *extends* (`logs`) => `any` | - |
| `chain` *extends* `Chain` \| `undefined` | `undefined` |

## Properties

### event

> **event**: [`ReturnType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)\<`ExtractFn`\>

Defined in: [packages/synapse-core/src/types.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/types.ts#L26)

The extracted event

***

### receipt

> **receipt**: `WaitForTransactionReceiptReturnType`\<`chain`\>

Defined in: [packages/synapse-core/src/types.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/types.ts#L24)

The transaction receipt

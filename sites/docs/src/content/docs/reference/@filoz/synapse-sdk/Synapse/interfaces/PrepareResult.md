---
title: PrepareResult
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L62)

Result of the prepare() method on StorageManager

## Properties

### costs

> **costs**: [`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)

Defined in: [packages/synapse-sdk/src/types.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L64)

The cost breakdown (either passed in or freshly computed).

***

### transaction

> **transaction**: \{ `depositAmount`: `bigint`; `execute`: (`options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hash`: `` `0x${string}` ``; `receipt`: `TransactionReceipt`\<`bigint`, `number`, `"success"` \| `"reverted"`, `TransactionType`\> \| `null`; \}\>; `includesApproval`: `boolean`; \} \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L66)

The single transaction to execute, or null if already ready.

#### Union Members

##### Type Literal

\{ `depositAmount`: `bigint`; `execute`: (`options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hash`: `` `0x${string}` ``; `receipt`: `TransactionReceipt`\<`bigint`, `number`, `"success"` \| `"reverted"`, `TransactionType`\> \| `null`; \}\>; `includesApproval`: `boolean`; \}

##### depositAmount

> **depositAmount**: `bigint`

Amount to deposit into the payments contract. 0n when only approval is needed.

##### execute

> **execute**: (`options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hash`: `` `0x${string}` ``; `receipt`: `TransactionReceipt`\<`bigint`, `number`, `"success"` \| `"reverted"`, `TransactionType`\> \| `null`; \}\>

Execute the transaction, wait for confirmation, and return the hash + receipt.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `onHash?`: (`hash`) => `void`; \} |
| `options.onHash?` | (`hash`) => `void` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hash`: `` `0x${string}` ``; `receipt`: `TransactionReceipt`\<`bigint`, `number`, `"success"` \| `"reverted"`, `TransactionType`\> \| `null`; \}\>

##### includesApproval

> **includesApproval**: `boolean`

Whether this transaction includes FWSS operator approval.

***

`null`

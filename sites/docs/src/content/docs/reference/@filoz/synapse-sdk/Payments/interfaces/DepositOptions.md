---
title: DepositOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/payments/service.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L22)

Options for deposit operation

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-sdk/src/payments/service.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L26)

The amount to deposit

***

### onAllowanceCheck?

> `optional` **onAllowanceCheck?**: (`current`, `required`) => `void`

Defined in: [packages/synapse-sdk/src/payments/service.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L30)

Called when checking current allowance

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `current` | `bigint` |
| `required` | `bigint` |

#### Returns

`void`

***

### onApprovalConfirmed?

> `optional` **onApprovalConfirmed?**: (`receipt`) => `void`

Defined in: [packages/synapse-sdk/src/payments/service.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L34)

Called when approval is confirmed

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `receipt` | `TransactionReceipt` |

#### Returns

`void`

***

### onApprovalTransaction?

> `optional` **onApprovalTransaction?**: (`tx`) => `void`

Defined in: [packages/synapse-sdk/src/payments/service.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L32)

Called when approval transaction is sent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tx` | `` `0x${string}` `` |

#### Returns

`void`

***

### onDepositStarting?

> `optional` **onDepositStarting?**: () => `void`

Defined in: [packages/synapse-sdk/src/payments/service.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L36)

Called before deposit transaction is sent

#### Returns

`void`

***

### to?

> `optional` **to?**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/payments/service.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L24)

Optional recipient address (defaults to wallet address if not provided)

***

### token?

> `optional` **token?**: `string`

Defined in: [packages/synapse-sdk/src/payments/service.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L28)

The token to deposit (defaults to USDFC)

---
title: UseDepositAndApproveProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/payments/use-deposit-and-approve.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/use-deposit-and-approve.ts#L11)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`DepositAndApproveOptions`](/reference/filoz/synapse-core/pay/type-aliases/depositandapproveoptions/), `"amount"`\>

## Properties

### address?

> `optional` **address?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/payments.d.ts:7

#### Inherited from

`Omit.address`

***

### deadline?

> `optional` **deadline?**: `bigint`

Defined in: synapse-core/dist/src/pay/payments.d.ts:8

#### Inherited from

`Omit.deadline`

***

### lockupAllowance?

> `optional` **lockupAllowance?**: `bigint`

Defined in: synapse-core/dist/src/pay/payments.d.ts:10

#### Inherited from

`Omit.lockupAllowance`

***

### maxLockupPeriod?

> `optional` **maxLockupPeriod?**: `bigint`

Defined in: synapse-core/dist/src/pay/payments.d.ts:11

#### Inherited from

`Omit.maxLockupPeriod`

***

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositAndApproveVariables`](/reference/filoz/synapse-react/type-aliases/usedepositandapprovevariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/payments/use-deposit-and-approve.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/use-deposit-and-approve.ts#L15)

The mutation options.

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/payments/use-deposit-and-approve.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/use-deposit-and-approve.ts#L19)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

***

### operator?

> `optional` **operator?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/payments.d.ts:4

#### Inherited from

`Omit.operator`

***

### rateAllowance?

> `optional` **rateAllowance?**: `bigint`

Defined in: synapse-core/dist/src/pay/payments.d.ts:9

#### Inherited from

`Omit.rateAllowance`

***

### spender?

> `optional` **spender?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/payments.d.ts:6

#### Inherited from

`Omit.spender`

***

### token?

> `optional` **token?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/payments.d.ts:5

#### Inherited from

`Omit.token`

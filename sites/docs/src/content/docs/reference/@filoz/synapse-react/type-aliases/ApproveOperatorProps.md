---
title: ApproveOperatorProps
next: true
prev: true
editUrl: false

---

> **ApproveOperatorProps** = \{ `mutation?`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\>, `"mutationFn"`\>; `onHash?`: (`hash`) => `void`; `operator?`: `Address`; `token?`: `Address`; \} \| `undefined`

Defined in: [synapse-react/src/payments/index.ts:204](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L204)

## Union Members

### Type Literal

\{ `mutation?`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\>, `"mutationFn"`\>; `onHash?`: (`hash`) => `void`; `operator?`: `Address`; `token?`: `Address`; \}

#### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\>, `"mutationFn"`\>

The mutation options.

#### onHash?

> `optional` **onHash?**: (`hash`) => `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

##### Returns

`void`

#### operator?

> `optional` **operator?**: `Address`

The address of the operator to approve.
If not provided, the operator will be the Warm Storage contract.

#### token?

> `optional` **token?**: `Address`

The address of the ERC20 token to query.
If not provided, the USDFC token address will be used.

***

`undefined`

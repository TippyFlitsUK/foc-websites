---
title: UseWithdrawProps
next: true
prev: true
editUrl: false

---

> **UseWithdrawProps** = [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/withdraw/type-aliases/optionstype/), `"amount"`\> & `object`

Defined in: [synapse-react/src/payments/index.ts:158](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L158)

## Type Declaration

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseWithdrawVariables`](/reference/filoz/synapse-react/type-aliases/usewithdrawvariables/)\>, `"mutationFn"`\>

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

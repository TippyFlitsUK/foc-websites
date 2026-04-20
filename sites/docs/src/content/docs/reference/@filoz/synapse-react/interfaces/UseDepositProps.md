---
title: UseDepositProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/payments/index.ts:100](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L100)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/deposit/type-aliases/optionstype/), `"amount"`\>

## Properties

### contractAddress?

> `optional` **contractAddress?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/deposit.d.ts:12

#### Inherited from

`Omit.contractAddress`

***

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositVariables`](/reference/filoz/synapse-react/type-aliases/usedepositvariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/payments/index.ts:104](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L104)

The mutation options.

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/payments/index.ts:108](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L108)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

***

### to?

> `optional` **to?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/deposit.d.ts:10

#### Inherited from

`Omit.to`

***

### token?

> `optional` **token?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/deposit.d.ts:9

#### Inherited from

`Omit.token`

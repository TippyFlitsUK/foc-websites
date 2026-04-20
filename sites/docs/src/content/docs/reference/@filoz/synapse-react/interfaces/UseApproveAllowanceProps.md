---
title: UseApproveAllowanceProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/erc20.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/erc20.ts#L53)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`OptionsType`](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/optionstype/), `"amount"`\>

## Properties

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseApproveAllowanceVariables`](/reference/filoz/synapse-react/type-aliases/useapproveallowancevariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/erc20.ts:57](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/erc20.ts#L57)

The mutation options.

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/erc20.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/erc20.ts#L61)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

***

### spender?

> `optional` **spender?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/erc20/approve.d.ts:11

#### Inherited from

`Omit.spender`

***

### token?

> `optional` **token?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/erc20/approve.d.ts:9

#### Inherited from

`Omit.token`

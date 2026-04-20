---
title: UseAccountInfoProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/payments/index.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L17)

## Extends

- `SetOptional`\<[`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/optionstype/), `"address"`\>

## Properties

### address?

> `optional` **address?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/accounts.d.ts:9

#### Inherited from

`SetOptional.address`

***

### blockNumber?

> `optional` **blockNumber?**: `bigint`

Defined in: synapse-core/dist/src/pay/accounts.d.ts:10

#### Inherited from

`SetOptional.blockNumber`

***

### contractAddress?

> `optional` **contractAddress?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/accounts.d.ts:11

#### Inherited from

`SetOptional.contractAddress`

***

### query?

> `optional` **query?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`UseQueryOptions`\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/), [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/), readonly `unknown`[]\>, `"queryKey"` \| `"queryFn"`\>

Defined in: [synapse-react/src/payments/index.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L23)

***

### token?

> `optional` **token?**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/pay/accounts.d.ts:8

#### Inherited from

`SetOptional.token`

***

### watch?

> `optional` **watch?**: `boolean`

Defined in: [synapse-react/src/payments/index.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L22)

Whether to watch blocks.

#### Default

```ts
false
```

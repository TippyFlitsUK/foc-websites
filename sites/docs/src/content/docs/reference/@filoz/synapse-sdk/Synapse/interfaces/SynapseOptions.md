---
title: SynapseOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:91](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L91)

Options for initializing the Synapse instance

## Properties

### account

> **account**: `` `0x${string}` `` \| `Account`

Defined in: [packages/synapse-sdk/src/types.ts:111](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L111)

Viem account

#### See

 - https://viem.sh/docs/accounts/jsonRpc
 - https://viem.sh/docs/accounts/local

***

### chain?

> `optional` **chain?**: [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/)

Defined in: [packages/synapse-sdk/src/types.ts:103](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L103)

Filecoin chain

***

### sessionKey?

> `optional` **sessionKey?**: [`SessionKey`](/reference/filoz/synapse-core/session-key/interfaces/sessionkey/)\<`"Secp256k1"`\>

Defined in: [packages/synapse-sdk/src/types.ts:113](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L113)

***

### source

> **source**: `string` \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:123](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L123)

Application identifier for namespace isolation. When set to a non-empty string, datasets
are tagged with this value and only datasets with a matching source are reused. Set to
`null` to explicitly opt out.

***

### transport?

> `optional` **transport?**: `Transport`

Defined in: [packages/synapse-sdk/src/types.ts:97](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L97)

Viem transport

#### See

https://viem.sh/docs/clients/intro#transports

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:116](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L116)

Whether to use CDN for retrievals (default: false)

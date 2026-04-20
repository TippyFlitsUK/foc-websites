---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/session-key/revoke.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L22)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/session-key/revoke.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L24)

Session key address.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/session-key/revoke.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L30)

Session key registry contract address. If not provided, defaults to the chain contract address.

***

### origin?

> `optional` **origin?**: `string`

Defined in: [packages/synapse-core/src/session-key/revoke.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L28)

The origin of the revoke operation. Defaults to 'synapse'.

***

### permissions?

> `optional` **permissions?**: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]

Defined in: [packages/synapse-core/src/session-key/revoke.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L26)

The permissions to revoke from the session key. Defaults to all permissions.

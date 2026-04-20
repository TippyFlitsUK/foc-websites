---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/session-key/login.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L24)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/session-key/login.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L26)

Session key address.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/session-key/login.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L34)

Session key registry contract address. If not provided, defaults to the chain contract address.

***

### expiresAt?

> `optional` **expiresAt?**: `bigint`

Defined in: [packages/synapse-core/src/session-key/login.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L30)

The expiry time as Unix timestamp (seconds). Defaults to now + 1 hour.

***

### origin?

> `optional` **origin?**: `string`

Defined in: [packages/synapse-core/src/session-key/login.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L32)

The origin of the session key authorization. Defaults to 'synapse'.

***

### permissions?

> `optional` **permissions?**: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]

Defined in: [packages/synapse-core/src/session-key/login.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L28)

The permissions to authorize for the session key. Defaults to all FWSS permissions.

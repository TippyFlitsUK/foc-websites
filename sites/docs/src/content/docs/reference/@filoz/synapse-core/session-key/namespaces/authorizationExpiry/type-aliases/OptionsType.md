---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L22)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L24)

The address of the user account.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L30)

Session key registry contract address. If not provided, the default is the session key registry contract address for the chain.

***

### permission

> **permission**: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L28)

The session key permission.

***

### sessionKeyAddress

> **sessionKeyAddress**: `Address`

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L26)

The address of the session key.

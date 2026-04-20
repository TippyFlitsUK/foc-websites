---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/accounts.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L17)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/pay/accounts.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L21)

The address of the account to query.

***

### blockNumber?

> `optional` **blockNumber?**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L23)

The block number to get the account info at.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/accounts.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L25)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/accounts.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L19)

The address of the ERC20 token to query. If not provided, the USDFC token address will be used.

---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/erc20/index.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L18)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/erc20/index.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L27)

The address of the account to query.

***

### spender?

> `optional` **spender?**: `Address`

Defined in: [packages/synapse-core/src/erc20/index.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L32)

The address of the spender to query.
If not provided, the Filcoin Pay contract address will be used.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/erc20/index.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L23)

The address of the ERC20 token to query.
If not provided, the USDFC token address will be used.

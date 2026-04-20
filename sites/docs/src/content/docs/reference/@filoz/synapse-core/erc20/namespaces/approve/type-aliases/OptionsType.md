---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/erc20/approve.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L22)

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/erc20/approve.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L26)

The amount to approve (in token base units).

***

### spender?

> `optional` **spender?**: `Address`

Defined in: [packages/synapse-core/src/erc20/approve.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L28)

The address of the spender to approve. If not provided, the Filecoin Pay contract address will be used.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/erc20/approve.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L24)

The address of the ERC20 token to approve. If not provided, the USDFC token address will be used.

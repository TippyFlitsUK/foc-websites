---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:10](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L10)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L12)

The address of the account to query.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L18)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### epoch?

> `optional` **epoch?**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:16](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L16)

Epoch to evaluate at. If not provided, current block number is fetched.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/get-account-summary.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-account-summary.ts#L14)

The address of the ERC20 token to query. If not provided, the USDFC token address will be used.

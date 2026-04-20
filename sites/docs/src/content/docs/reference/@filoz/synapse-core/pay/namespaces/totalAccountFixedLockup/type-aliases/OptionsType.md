---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/total-account-fixed-lockup.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/total-account-fixed-lockup.ts#L7)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/pay/total-account-fixed-lockup.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/total-account-fixed-lockup.ts#L9)

The address of the account to query.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/total-account-fixed-lockup.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/total-account-fixed-lockup.ts#L13)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/total-account-fixed-lockup.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/total-account-fixed-lockup.ts#L11)

The address of the ERC20 token to query. If not provided, the USDFC token address will be used.

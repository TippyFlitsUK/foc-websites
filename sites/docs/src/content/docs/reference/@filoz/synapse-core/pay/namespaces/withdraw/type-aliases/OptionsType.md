---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/withdraw.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L26)

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/pay/withdraw.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L30)

The amount to withdraw (in token base units). Must be greater than 0.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/withdraw.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L32)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/withdraw.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L28)

The address of the ERC20 token to withdraw. If not provided, the USDFC token address will be used.

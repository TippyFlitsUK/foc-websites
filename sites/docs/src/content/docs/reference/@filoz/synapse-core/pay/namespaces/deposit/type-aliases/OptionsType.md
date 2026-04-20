---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/deposit.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L26)

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/pay/deposit.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L32)

The amount to deposit (in token base units). Must be greater than 0.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L34)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### to?

> `optional` **to?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L30)

The recipient address for the deposit. If not provided, the sender's address will be used.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L28)

The address of the ERC20 token to deposit. If not provided, the USDFC token address will be used.

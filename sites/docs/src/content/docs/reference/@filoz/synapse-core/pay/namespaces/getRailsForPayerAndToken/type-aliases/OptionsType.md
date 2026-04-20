---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L18)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L28)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L26)

Maximum number of rails to return. Use 0 to get all remaining rails. Defaults to 0.

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L24)

Starting index for pagination (0-based). Defaults to 0.

***

### payer

> **payer**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L20)

The address of the payer to query

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L22)

The address of the ERC20 token to filter by. If not provided, the USDFC token address will be used.

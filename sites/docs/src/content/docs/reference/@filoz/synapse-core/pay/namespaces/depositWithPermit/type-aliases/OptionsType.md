---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L25)

## Properties

### address?

> `optional` **address?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L31)

The depositor address. If not provided, the client account address will be used.

***

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L27)

The amount to deposit (in token base units). Must be greater than 0.

***

### deadline?

> `optional` **deadline?**: `bigint`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L35)

The permit deadline as a Unix timestamp (seconds). If not provided, defaults to now + 1 hour.

***

### spender?

> `optional` **spender?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L33)

The spender address for the permit. If not provided, the payments contract address will be used.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L29)

The address of the ERC20 token. If not provided, the USDFC token address will be used.

---
title: DepositAndApproveOptions
next: true
prev: true
editUrl: false

---

> **DepositAndApproveOptions** = `object`

Defined in: [packages/synapse-core/src/pay/payments.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L24)

## Properties

### address?

> `optional` **address?**: `Address`

Defined in: [packages/synapse-core/src/pay/payments.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L44)

The address of the account to deposit from. If not provided, the client account address will be used.

***

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/pay/payments.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L28)

The amount to deposit.

***

### deadline?

> `optional` **deadline?**: `bigint`

Defined in: [packages/synapse-core/src/pay/payments.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L48)

The deadline of the permit. If not provided, the deadline will be set to 1 hour from now.

***

### lockupAllowance?

> `optional` **lockupAllowance?**: `bigint`

Defined in: [packages/synapse-core/src/pay/payments.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L56)

The lockup allowance to approve. If not provided, the maxUint256 will be used.

***

### maxLockupPeriod?

> `optional` **maxLockupPeriod?**: `bigint`

Defined in: [packages/synapse-core/src/pay/payments.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L60)

The max lockup period to approve. If not provided, the LOCKUP_PERIOD will be used.

***

### operator?

> `optional` **operator?**: `Address`

Defined in: [packages/synapse-core/src/pay/payments.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L32)

The address of the operator to approve.

***

### rateAllowance?

> `optional` **rateAllowance?**: `bigint`

Defined in: [packages/synapse-core/src/pay/payments.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L52)

The rate allowance to approve. If not provided, the maxUint256 will be used.

***

### spender?

> `optional` **spender?**: `Address`

Defined in: [packages/synapse-core/src/pay/payments.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L40)

The address of the spender to approve. If not provided, the payments contract address will be used.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/payments.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L36)

The address of the token to deposit. If not provided, the USDFC token address will be used.

---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L25)

## Properties

### approve

> **approve**: `boolean`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L31)

Whether to approve (true) or revoke (false) the operator.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L39)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### lockupAllowance?

> `optional` **lockupAllowance?**: `bigint`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L35)

Maximum lockup amount the operator can use (in token base units). Defaults to maxUint256 when approving, 0n when revoking.

***

### maxLockupPeriod?

> `optional` **maxLockupPeriod?**: `bigint`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L37)

Maximum lockup period in epochs the operator can set for payment rails. Defaults to 30 days in epochs when approving, 0n when revoking.

***

### operator?

> `optional` **operator?**: `Address`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L29)

The address of the operator to approve/revoke. If not provided, the Warm Storage contract address will be used.

***

### rateAllowance?

> `optional` **rateAllowance?**: `bigint`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L33)

Maximum rate the operator can use per epoch (in token base units). Defaults to maxUint256 when approving, 0n when revoking.

***

### token?

> `optional` **token?**: `Address`

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L27)

The address of the ERC20 token. If not provided, the USDFC token address will be used.

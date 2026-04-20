---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L33)

The operator approval information from the payments contract.

## Properties

### isApproved

> **isApproved**: `boolean`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L35)

Whether the operator is approved to act on behalf of the client

***

### lockupAllowance

> **lockupAllowance**: `bigint`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L39)

Maximum lockup amount the operator can use (in token base units)

***

### lockupUsage

> **lockupUsage**: `bigint`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L43)

Current lockup being used by the operator (in token base units)

***

### maxLockupPeriod

> **maxLockupPeriod**: `bigint`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L45)

Maximum lockup period in epochs the operator can set for payment rails

***

### rateAllowance

> **rateAllowance**: `bigint`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L37)

Maximum rate the operator can use per epoch (in token base units)

***

### rateUsage

> **rateUsage**: `bigint`

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L41)

Current rate being used by the operator (in token base units)

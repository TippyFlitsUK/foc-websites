---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/pay/accounts.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L33)

The account information from the payments contract.

## Properties

### availableFunds

> **availableFunds**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L43)

Available funds for the account (funds - lockupCurrent + lockupRate * (currentEpoch - lockupLastSettledAt))

***

### funds

> **funds**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L35)

Total funds deposited by the account

***

### lockupCurrent

> **lockupCurrent**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L37)

Current lockup amount (not yet settled)

***

### lockupLastSettledAt

> **lockupLastSettledAt**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L41)

Epoch when lockup was last settled

***

### lockupRate

> **lockupRate**: `bigint`

Defined in: [packages/synapse-core/src/pay/accounts.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L39)

Rate at which lockup increases per epoch

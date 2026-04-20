---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L29)

The rail information from the payments contract.

## Properties

### commissionRateBps

> **commissionRateBps**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L51)

Commission rate in basis points (e.g., 500 = 5%)

***

### endEpoch

> **endEpoch**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L49)

End epoch (0 for active rails, > 0 for terminated rails)

***

### from

> **from**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L33)

The address of the payer

***

### lockupFixed

> **lockupFixed**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L45)

Fixed lockup amount (in token base units)

***

### lockupPeriod

> **lockupPeriod**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L43)

Lockup period in epochs

***

### operator

> **operator**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L37)

The address of the operator

***

### paymentRate

> **paymentRate**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L41)

Payment rate per epoch (in token base units)

***

### serviceFeeRecipient

> **serviceFeeRecipient**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L53)

Address that receives service fees

***

### settledUpTo

> **settledUpTo**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:47](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L47)

Epoch up to which the rail has been settled

***

### to

> **to**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L35)

The address of the payee

***

### token

> **token**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L31)

The address of the ERC20 token used for payments

***

### validator

> **validator**: `Address`

Defined in: [packages/synapse-core/src/pay/get-rail.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L39)

The address of the validator

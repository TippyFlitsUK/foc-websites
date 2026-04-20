---
title: StorageInfo
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:626](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L626)

Comprehensive storage service information

## Properties

### allowances

> **allowances**: \{ `isApproved`: `boolean`; `lockupAllowance`: `bigint`; `lockupUsed`: `bigint`; `maxLockupPeriod`: `bigint`; `rateAllowance`: `bigint`; `rateUsed`: `bigint`; `service`: `` `0x${string}` ``; \} \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:671](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L671)

Current user allowances (null if wallet not connected)

#### Union Members

##### Type Literal

\{ `isApproved`: `boolean`; `lockupAllowance`: `bigint`; `lockupUsed`: `bigint`; `maxLockupPeriod`: `bigint`; `rateAllowance`: `bigint`; `rateUsed`: `bigint`; `service`: `` `0x${string}` ``; \}

##### isApproved

> **isApproved**: `boolean`

Whether the service operator is approved to act on behalf of the wallet

##### lockupAllowance

> **lockupAllowance**: `bigint`

Maximum lockup amount allowed

##### lockupUsed

> **lockupUsed**: `bigint`

Current lockup allowance used

##### maxLockupPeriod

> **maxLockupPeriod**: `bigint`

Maximum lockup period in epochs the operator can set

##### rateAllowance

> **rateAllowance**: `bigint`

Maximum payment rate per epoch allowed

##### rateUsed

> **rateUsed**: `bigint`

Current rate allowance used

##### service

> **service**: `` `0x${string}` ``

Service contract address

***

`null`

***

### pricing

> **pricing**: `object`

Defined in: [packages/synapse-sdk/src/types.ts:628](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L628)

Pricing information for storage services

#### noCDN

> **noCDN**: `object`

Pricing without CDN

##### noCDN.perTiBPerDay

> **perTiBPerDay**: `bigint`

Cost per TiB per day in token units

##### noCDN.perTiBPerEpoch

> **perTiBPerEpoch**: `bigint`

Cost per TiB per epoch in token units

##### noCDN.perTiBPerMonth

> **perTiBPerMonth**: `bigint`

Cost per TiB per month in token units

#### tokenAddress

> **tokenAddress**: `` `0x${string}` ``

Token contract address

#### tokenSymbol

> **tokenSymbol**: `string`

Token symbol (always USDFC for now)

#### withCDN

> **withCDN**: `object`

Pricing with CDN enabled

##### withCDN.perTiBPerDay

> **perTiBPerDay**: `bigint`

Cost per TiB per day in token units

##### withCDN.perTiBPerEpoch

> **perTiBPerEpoch**: `bigint`

Cost per TiB per epoch in token units

##### withCDN.perTiBPerMonth

> **perTiBPerMonth**: `bigint`

Cost per TiB per month in token units

***

### providers

> **providers**: [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)[]

Defined in: [packages/synapse-sdk/src/types.ts:654](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L654)

List of approved service providers

***

### serviceParameters

> **serviceParameters**: `object`

Defined in: [packages/synapse-sdk/src/types.ts:657](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L657)

Service configuration parameters

#### epochDuration

> **epochDuration**: `number`

Duration of each epoch in seconds

#### epochsPerDay

> **epochsPerDay**: `bigint`

Number of epochs in a day

#### epochsPerMonth

> **epochsPerMonth**: `bigint`

Number of epochs in a month

#### maxUploadSize

> **maxUploadSize**: `number`

Maximum allowed upload size in bytes

#### minUploadSize

> **minUploadSize**: `number`

Minimum allowed upload size in bytes

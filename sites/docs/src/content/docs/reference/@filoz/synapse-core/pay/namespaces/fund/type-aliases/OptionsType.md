---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/fund.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/fund.ts#L21)

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/synapse-core/src/pay/fund.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/fund.ts#L23)

Amount of USDFC to deposit. 0n when only FWSS approval is needed.

***

### needsFwssMaxApproval?

> `optional` **needsFwssMaxApproval?**: `boolean`

Defined in: [packages/synapse-core/src/pay/fund.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/fund.ts#L25)

Override for FWSS approval state. When omitted, checks via isFwssMaxApproved RPC.

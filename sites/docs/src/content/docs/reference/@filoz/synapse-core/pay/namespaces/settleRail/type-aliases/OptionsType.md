---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L23)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L29)

Payments contract address. If not provided, the default is the payments contract address for the chain.

***

### railId

> **railId**: `bigint`

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L25)

The rail ID to settle

***

### untilEpoch?

> `optional` **untilEpoch?**: `bigint`

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L27)

The epoch to settle up to. If not provided, the current epoch will be used.

---
title: AuctionInfo
next: true
prev: true
editUrl: false

---

> **AuctionInfo** = `object`

Defined in: [packages/synapse-core/src/auction/auction.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L11)

Transaction fees are sold in a recurring Dutch auction.
Anyone can purchase the accrued fees with FIL.
The purchase price decays 75% per week.

## Properties

### startPrice

> **startPrice**: `bigint`

Defined in: [packages/synapse-core/src/auction/auction.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L13)

***

### startTime

> **startTime**: `bigint`

Defined in: [packages/synapse-core/src/auction/auction.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L14)

***

### token

> **token**: `Address`

Defined in: [packages/synapse-core/src/auction/auction.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L12)

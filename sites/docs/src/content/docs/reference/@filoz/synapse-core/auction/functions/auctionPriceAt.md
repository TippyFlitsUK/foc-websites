---
title: auctionPriceAt
next: true
prev: true
editUrl: false

---

> **auctionPriceAt**(`auction`, `timestamp`): `bigint`

Defined in: [packages/synapse-core/src/auction/auction.ts:69](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L69)

The acceptance price decays 75% per week

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `auction` | [`AuctionInfo`](/reference/filoz/synapse-core/auction/type-aliases/auctioninfo/) | dutch auction information |
| `timestamp` | `bigint` | seconds since 1970 |

## Returns

`bigint`

how much FIL is required to purchase the transaction fees

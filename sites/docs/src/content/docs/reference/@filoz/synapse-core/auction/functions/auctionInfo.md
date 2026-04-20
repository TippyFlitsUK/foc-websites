---
title: auctionInfo
next: true
prev: true
editUrl: false

---

> **auctionInfo**(`client`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AuctionInfo`](/reference/filoz/synapse-core/auction/type-aliases/auctioninfo/)\>

Defined in: [packages/synapse-core/src/auction/auction.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L26)

Get the initial state of the current FilecoinPay auction
This auction information can be passed to auctionPriceAt to calculate the current price
Auctions are dutch, so the acceptance price decreases over time
Each token has a separate auction

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | used to read the FilecoinPay contract |
| `token` | `` `0x${string}` `` | specifies which token's auction |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AuctionInfo`](/reference/filoz/synapse-core/auction/type-aliases/auctioninfo/)\>

the auction startPrice and startTime

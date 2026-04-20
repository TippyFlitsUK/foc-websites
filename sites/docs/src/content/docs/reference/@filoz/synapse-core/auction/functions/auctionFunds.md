---
title: auctionFunds
next: true
prev: true
editUrl: false

---

> **auctionFunds**(`client`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/auction/auction.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/auction/auction.ts#L49)

Get the current funds available in the FilecoinPay auction
These auction funds accrue as payment rails settle
Each token has a separate auction

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | used to read the FilecoinPay contract |
| `token` | `` `0x${string}` `` | specifies which token's auction |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

how much of the token is available to purchasae in the auction

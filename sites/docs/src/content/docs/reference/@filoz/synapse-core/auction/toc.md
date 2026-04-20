---
title: auction
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

Auction

## Example

```ts
import * as auction from '@filoz/synapse-core/auction'
```

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AuctionInfo](/reference/filoz/synapse-core/auction/type-aliases/auctioninfo/) | Transaction fees are sold in a recurring Dutch auction. Anyone can purchase the accrued fees with FIL. The purchase price decays 75% per week. |

## Variables

| Variable | Description |
| ------ | ------ |
| [HALVING\_SECONDS](/reference/filoz/synapse-core/auction/variables/halving_seconds/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [auctionFunds](/reference/filoz/synapse-core/auction/functions/auctionfunds/) | Get the current funds available in the FilecoinPay auction These auction funds accrue as payment rails settle Each token has a separate auction |
| [auctionInfo](/reference/filoz/synapse-core/auction/functions/auctioninfo/) | Get the initial state of the current FilecoinPay auction This auction information can be passed to auctionPriceAt to calculate the current price Auctions are dutch, so the acceptance price decreases over time Each token has a separate auction |
| [auctionPriceAt](/reference/filoz/synapse-core/auction/functions/auctionpriceat/) | The acceptance price decays 75% per week |

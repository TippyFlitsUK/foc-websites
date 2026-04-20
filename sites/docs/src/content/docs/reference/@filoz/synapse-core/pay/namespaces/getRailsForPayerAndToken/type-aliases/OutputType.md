---
title: OutputType
next: true
prev: true
editUrl: false

---

> **OutputType** = `object`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L40)

Paginated rail results for a payer and token.

## Properties

### nextOffset

> **nextOffset**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L44)

Next offset for pagination (equals offset + results.length if more results available)

***

### results

> **results**: [`RailInfo`](/reference/filoz/synapse-core/pay/type-aliases/railinfo/)[]

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L42)

Array of rail information

***

### total

> **total**: `bigint`

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L46)

Total number of rails for this payer and token

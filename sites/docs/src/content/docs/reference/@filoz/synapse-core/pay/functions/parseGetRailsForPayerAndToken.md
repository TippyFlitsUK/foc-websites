---
title: parseGetRailsForPayerAndToken
next: true
prev: true
editUrl: false

---

> **parseGetRailsForPayerAndToken**(`data`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayerandtoken/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts:169](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payer-and-token.ts#L169)

Parse the contract output into the getRailsForPayerAndToken output type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[readonly `object`[], `bigint`, `bigint`\] | The contract output from the getRailsForPayerAndToken function |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayerandtoken/type-aliases/outputtype/)

The parsed paginated rail results [getRailsForPayerAndToken.OutputType](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayerandtoken/type-aliases/outputtype/)

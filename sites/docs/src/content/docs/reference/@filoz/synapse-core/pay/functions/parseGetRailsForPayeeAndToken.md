---
title: parseGetRailsForPayeeAndToken
next: true
prev: true
editUrl: false

---

> **parseGetRailsForPayeeAndToken**(`data`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/get-rails-for-payee-and-token.ts:167](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payee-and-token.ts#L167)

Parse the contract output into the getRailsForPayeeAndToken output type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[readonly `object`[], `bigint`, `bigint`\] | The contract output from the getRailsForPayeeAndToken function |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)

The parsed paginated rail results [getRailsForPayeeAndToken.OutputType](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)

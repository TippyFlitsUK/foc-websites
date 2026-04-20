---
title: parseOperatorApprovals
next: true
prev: true
editUrl: false

---

> **parseOperatorApprovals**(`data`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:162](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L162)

Parse the contract output into the operatorApprovals output type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[`boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\] | The contract output from the operatorApprovals function |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)

The parsed operator approval information [operatorApprovals.OutputType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)

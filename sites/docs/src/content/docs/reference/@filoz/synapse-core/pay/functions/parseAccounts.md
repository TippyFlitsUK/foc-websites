---
title: parseAccounts
next: true
prev: true
editUrl: false

---

> **parseAccounts**(`data`, `currentEpoch`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/accounts.ts:162](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L162)

Parse the contract output into the accounts output type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[`bigint`, `bigint`, `bigint`, `bigint`\] | The contract output from the accounts function |
| `currentEpoch` | `bigint` | The current epoch (block number in filecoin) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)

The parsed account information [accounts.OutputType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)

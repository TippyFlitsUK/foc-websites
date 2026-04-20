---
title: calculateAccountDebt
next: true
prev: true
editUrl: false

---

> **calculateAccountDebt**(`params`): `bigint`

Defined in: [packages/synapse-core/src/pay/account-debt.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/account-debt.ts#L17)

Compute account debt — the unsettled lockup amount exceeding available funds.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/pay/namespaces/calculateaccountdebt/type-aliases/paramstype/) | Raw account fields + current epoch |

## Returns

`bigint`

The debt amount (0n if account is healthy)

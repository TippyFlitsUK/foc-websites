---
title: resolveAccountState
next: true
prev: true
editUrl: false

---

> **resolveAccountState**(`params`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/resolveaccountstate/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/resolve-account-state.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/resolve-account-state.ts#L27)

Project account state forward to `currentEpoch` by simulating settlement locally.

Pure function — no RPC call. Takes raw account fields from `accounts()` + currentEpoch
and computes what the account state would be if settlement happened now.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ParamsType`](/reference/filoz/synapse-core/pay/namespaces/resolveaccountstate/type-aliases/paramstype/) | Raw account fields + current epoch |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/resolveaccountstate/type-aliases/outputtype/)

fundedUntilEpoch and availableFunds after simulated settlement

---
title: isFwssMaxApproved
next: true
prev: true
editUrl: false

---

> **isFwssMaxApproved**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/pay/is-fwss-max-approved.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/is-fwss-max-approved.ts#L36)

Check whether FWSS is approved with sufficient rate/lockup allowances
and at least LOCKUP_PERIOD (30 days) for maxLockupPeriod.

rateAllowance is checked for exact maxUint256 since the contract never
decrements it — it only tracks usage separately via rateUsage.

lockupAllowance uses a >= maxUint256 / 2 threshold instead of exact equality
because the contract permanently decrements lockupAllowance on one-time
payments (e.g. when settleFilBeamPaymentRails processes CDN egress charges).
After initially approving with maxUint256, each CDN settlement reduces
lockupAllowance by the one-time payment amount, causing an exact === check
to fail and unnecessarily prompt the user for a new approval transaction.
Half of maxUint256 is still astronomically large — no realistic usage would
ever cross this threshold.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | Read-only viem client |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/isfwssmaxapproved/type-aliases/optionstype/) | [isFwssMaxApproved.OptionsType](/reference/filoz/synapse-core/pay/namespaces/isfwssmaxapproved/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

`true` if FWSS is fully approved with sufficient allowances

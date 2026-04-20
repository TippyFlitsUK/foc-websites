---
title: totalAccountFixedLockup
next: true
prev: true
editUrl: false

---

> **totalAccountFixedLockup**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/total-account-fixed-lockup.ts:54](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/total-account-fixed-lockup.ts#L54)

Get the total fixed lockup across all rails for an account.

Fetches all rails for the payer, then batches `getRail` calls via multicall
to sum `lockupFixed`. Includes terminated-but-not-finalized rails since they
still hold locked funds until finalization.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use for the query. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/optionstype/) | [totalAccountFixedLockup.OptionsType](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)\>

The total fixed lockup and active rail count [totalAccountFixedLockup.OutputType](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)

## Throws

Errors [totalAccountFixedLockup.ErrorType](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/errortype/)

## Example

```ts
import { totalAccountFixedLockup } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const lockup = await totalAccountFixedLockup(client, {
  address: '0x1234567890123456789012345678901234567890',
})

console.log('Total fixed lockup:', lockup.totalFixedLockup)
```

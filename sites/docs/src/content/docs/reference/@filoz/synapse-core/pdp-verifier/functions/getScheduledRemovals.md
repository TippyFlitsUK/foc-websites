---
title: getScheduledRemovals
next: true
prev: true
editUrl: false

---

> **getScheduledRemovals**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<readonly `bigint`[]\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-scheduled-removals.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-scheduled-removals.ts#L53)

Get the scheduled removals for a data set (deduped)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the scheduled removals. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovals/type-aliases/optionstype/) | [getScheduledRemovals.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovals/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<readonly `bigint`[]\>

The piece IDs scheduled for removal [getScheduledRemovals.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovals/type-aliases/outputtype/)

## Example

```ts
import { getScheduledRemovals } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const pieceIds = await getScheduledRemovals(client, {
  dataSetId: 1n,
})
```

## Throws

Errors [getScheduledRemovals.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovals/type-aliases/errortype/)

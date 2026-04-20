---
title: getActivePieceCount
next: true
prev: true
editUrl: false

---

> **getActivePieceCount**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-piece-count.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-piece-count.ts#L43)

Get the active piece count for a data set (non-zero leaf count)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the active piece count. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececount/type-aliases/optionstype/) | [getActivePieceCount.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececount/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The active piece count for the data set [getActivePieceCount.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececount/type-aliases/outputtype/)

## Example

```ts
import { getActivePieceCount } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const activePieceCount = await getActivePieceCount(client, { dataSetId: 1n })
```

## Throws

Errors [getActivePieceCount.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececount/type-aliases/errortype/)

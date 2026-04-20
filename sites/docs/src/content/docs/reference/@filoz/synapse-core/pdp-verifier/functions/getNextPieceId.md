---
title: getNextPieceId
next: true
prev: true
editUrl: false

---

> **getNextPieceId**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-next-piece-id.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-next-piece-id.ts#L45)

Get the next piece ID for a data set

Total pieces ever added; does not decrease when pieces are removed

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the next piece ID. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceid/type-aliases/optionstype/) | [getNextPieceId.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceid/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The next piece ID for the data set [getNextPieceId.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceid/type-aliases/outputtype/)

## Example

```ts
import { getNextPieceId } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const nextPieceId = await getNextPieceId(client, { dataSetId: 1n })
```

## Throws

Errors [getNextPieceId.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceid/type-aliases/errortype/)

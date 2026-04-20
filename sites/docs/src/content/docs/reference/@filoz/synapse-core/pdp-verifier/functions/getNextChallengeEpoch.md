---
title: getNextChallengeEpoch
next: true
prev: true
editUrl: false

---

> **getNextChallengeEpoch**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-next-challenge-epoch.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-next-challenge-epoch.ts#L61)

Get next challenge epoch

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the active pieces. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepoch/type-aliases/optionstype/) | [getNextChallengeEpoch.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepoch/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The next challenge epoch for the data set [getNextChallengeEpoch.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepoch/type-aliases/outputtype/)

## Example

```ts
import { getNextChallengeEpoch } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const nextChallengeEpoch = await getNextChallengeEpoch(client, {
  dataSetId: 1n,
})
```

## Throws

Errors [getNextChallengeEpoch.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepoch/type-aliases/errortype/)

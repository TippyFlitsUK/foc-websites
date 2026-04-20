---
title: getAccountTotalStorageSize
next: true
prev: true
editUrl: false

---

> **getAccountTotalStorageSize**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-account-total-storage-size.ts:55](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-account-total-storage-size.ts#L55)

Get the total storage size across all live datasets for an account.

Fetches all datasets for the given address from FWSS, checks liveness via
PDP Verifier, and sums the sizes of live datasets.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/optionstype/) | [getAccountTotalStorageSize.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)\>

Total storage size and dataset count [getAccountTotalStorageSize.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)

## Example

```ts
import { getAccountTotalStorageSize } from '@filoz/synapse-core/warm-storage'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const { totalSizeBytes, datasetCount } = await getAccountTotalStorageSize(client, {
  address: '0x...',
})
```

## Throws

Errors [getAccountTotalStorageSize.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/errortype/)

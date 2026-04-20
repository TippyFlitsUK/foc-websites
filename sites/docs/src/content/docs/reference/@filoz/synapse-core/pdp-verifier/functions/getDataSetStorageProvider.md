---
title: getDataSetStorageProvider
next: true
prev: true
editUrl: false

---

> **getDataSetStorageProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-data-set-storage-provider.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-data-set-storage-provider.ts#L64)

Get the storage provider addresses for a data set

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set storage provider. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/optionstype/) | [getDataSetStorageProvider.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/outputtype/)\>

The storage provider addresses for the data set [getDataSetStorageProvider.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/outputtype/)

## Example

```ts
import { getDataSetStorageProvider } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const [storageProvider, proposedStorageProvider] = await getDataSetStorageProvider(client, {
  dataSetId: 1n,
})
```

## Throws

Errors [getDataSetStorageProvider.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/type-aliases/errortype/)

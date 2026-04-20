---
title: getEndorsedProviderIds
next: true
prev: true
editUrl: false

---

> **getEndorsedProviderIds**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts#L58)

Get all endorsed provider IDs

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the endorsed providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/optionstype/) | [getEndorsedProviderIds.OptionsType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)\>

Array of endorsed provider IDs [getEndorsedProviderIds.OutputType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)

## Throws

Errors [getEndorsedProviderIds.ErrorType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/errortype/)

## Example

```ts
import { getEndorsedProviderIds } from '@filoz/synapse-core/endorsements'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const providerIds = await getEndorsedProviderIds(client)

console.log(providerIds)
```

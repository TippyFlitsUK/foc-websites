---
title: getApprovedPDPProviders
next: true
prev: true
editUrl: false

---

> **getApprovedPDPProviders**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-providers.ts:182](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-providers.ts#L182)

Get FilecoinWarmStorage approved PDP providers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/optionstype/) | [getApprovedPDPProviders.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/outputtype/)\>

The approved PDP providers [getApprovedPDPProviders.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/outputtype/)

## Throws

Errors [getApprovedPDPProviders.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getapprovedpdpproviders/type-aliases/errortype/)

## Example

```ts
import { getApprovedPDPProviders } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const result = await getApprovedPDPProviders(client)

console.log(result)
```

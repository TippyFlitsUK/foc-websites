---
title: readPdpDataSetInfo
next: true
prev: true
editUrl: false

---

> **readPdpDataSetInfo**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PdpDataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/pdpdatasetinfo/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-pdp-data-set.ts:83](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-pdp-data-set.ts#L83)

Read the PDP data set info.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to read the PDP data set info. |
| `options` | \{ `dataSetInfo`: [`DataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/datasetinfo/); `providerId`: `bigint`; \} | - |
| `options.dataSetInfo` | [`DataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/datasetinfo/) | - |
| `options.providerId` | `bigint` | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PdpDataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/pdpdatasetinfo/)\>

PDP data set info [PdpDataSetInfo](/reference/filoz/synapse-core/warm-storage/type-aliases/pdpdatasetinfo/)

---
title: getDataSet
next: true
prev: true
editUrl: false

---

> **getDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `bigint`; `nextChallengeEpoch`: `number`; `pieces`: `object`[]; \}\>

Defined in: [packages/synapse-core/src/sp/get-data-set.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/get-data-set.ts#L45)

Get a data set from the PDP API.

GET /pdp/data-sets/{dataSetId}

:::caution[Deprecated]
  Use getPdpDataSet instead.
  :::

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/getdataset/type-aliases/optionstype/) | [getDataSet.OptionsType](/reference/filoz/synapse-core/sp/namespaces/getdataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `bigint`; `nextChallengeEpoch`: `number`; `pieces`: `object`[]; \}\>

The data set from the PDP API. [getDataSet.OutputType](/reference/filoz/synapse-core/sp/namespaces/getdataset/type-aliases/outputtype/)

## Throws

Errors [getDataSet.ErrorType](/reference/filoz/synapse-core/sp/namespaces/getdataset/type-aliases/errortype/)

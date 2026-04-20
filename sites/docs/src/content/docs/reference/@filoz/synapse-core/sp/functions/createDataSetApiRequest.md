---
title: createDataSetApiRequest
next: true
prev: true
editUrl: false

---

> **createDataSetApiRequest**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L58)

Create a data set on PDP API

POST /pdp/data-sets

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/type-aliases/optionstype/) | [createDataSet.OptionsType](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/type-aliases/outputtype/)\>

Transaction hash and status URL. createDataSet.OutputType

## Throws

Errors [createDataSet.ErrorType](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/errortype/)

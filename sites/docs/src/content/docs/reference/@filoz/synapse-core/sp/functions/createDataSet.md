---
title: createDataSet
next: true
prev: true
editUrl: false

---

> **createDataSet**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:128](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L128)

Create a data set

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to create the data set. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/optionstype/) | [createDataSet.OptionsType](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/type-aliases/outputtype/)\>

Transaction hash and status URL. [createDataSet.ReturnType](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/returntype/)

## Throws

Errors [createDataSet.ErrorType](/reference/filoz/synapse-core/sp/namespaces/createdataset/type-aliases/errortype/)

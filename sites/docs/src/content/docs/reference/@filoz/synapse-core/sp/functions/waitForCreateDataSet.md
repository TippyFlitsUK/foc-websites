---
title: waitForCreateDataSet
next: true
prev: true
editUrl: false

---

> **waitForCreateDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `createMessageHash`: `` `0x${string}` ``; `dataSetCreated`: `true`; `dataSetId`: `bigint`; `ok`: `true`; `service`: `string`; `txStatus`: `"confirmed"`; \}\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:216](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L216)

Wait for the data set creation status.

GET /pdp/data-sets/created({txHash})

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedataset/type-aliases/optionstype/) | [waitForCreateDataSet.OptionsType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedataset/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `createMessageHash`: `` `0x${string}` ``; `dataSetCreated`: `true`; `dataSetId`: `bigint`; `ok`: `true`; `service`: `string`; `txStatus`: `"confirmed"`; \}\>

Status [waitForCreateDataSet.ReturnType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedataset/type-aliases/returntype/)

## Throws

Errors [waitForCreateDataSet.ErrorType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedataset/type-aliases/errortype/)

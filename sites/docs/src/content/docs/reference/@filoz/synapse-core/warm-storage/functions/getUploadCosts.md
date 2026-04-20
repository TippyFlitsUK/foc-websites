---
title: getUploadCosts
next: true
prev: true
editUrl: false

---

> **getUploadCosts**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L60)

Read-only function that computes upload costs, deposit needed, and approval state.

Fetches account state, pricing, and approval via read-only contract calls,
then feeds results into pure calculation functions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | Read-only viem client |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/type-aliases/optionstype/) | [getUploadCosts.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/type-aliases/outputtype/)\>

[getUploadCosts.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/type-aliases/outputtype/)

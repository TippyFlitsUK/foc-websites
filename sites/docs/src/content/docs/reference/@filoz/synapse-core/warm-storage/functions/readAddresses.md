---
title: readAddresses
next: true
prev: true
editUrl: false

---

> **readAddresses**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/read-addresses.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/read-addresses.ts#L30)

Read FOC addresses from the Warm Storage contract

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to read the addresses. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/optionstype/) | [readAddresses.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/outputtype/)\>

The addresses [readAddresses.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/outputtype/)

## Throws

Errors [readAddresses.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/type-aliases/errortype/)

---
title: signCreateDataSet
next: true
prev: true
editUrl: false

---

> **signCreateDataSet**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset.ts#L43)

Sign and abi encode the create data set extra data

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to sign the message. |
| `options` | [`signCreateDataSetOptions`](/reference/filoz/synapse-core/typed-data/type-aliases/signcreatedatasetoptions/) | [signCreateDataSetOptions](/reference/filoz/synapse-core/typed-data/type-aliases/signcreatedatasetoptions/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

## Throws

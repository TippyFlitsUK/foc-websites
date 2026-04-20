---
title: balanceForPermit
next: true
prev: true
editUrl: false

---

> **balanceForPermit**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/erc20/index.ts:127](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L127)

Get the balance, name, nonce, and version of an ERC20 token.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/optionstype/) | [balanceForPermit.OptionsType](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/outputtype/)\>

The balance, name, nonce, and version. [balanceForPermit.OutputType](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/outputtype/)

## Throws

Errors [balanceForPermit.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/errortype/)

---
title: balance
next: true
prev: true
editUrl: false

---

> **balance**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/erc20/index.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/index.ts#L53)

Get the balance, decimals, symbol, and allowance of an ERC20 token.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/optionstype/) | [balance.OptionsType](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/outputtype/)\>

The balance, decimals, symbol, and allowance. [balance.OutputType](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/outputtype/)

## Throws

Errors [balance.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/errortype/)

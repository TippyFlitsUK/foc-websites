---
title: RpcResponse
next: true
prev: true
editUrl: false

---

> **RpcResponse**\<`result`, `error`\> = `object` & [`SuccessResult`](/reference/filoz/synapse-core/mocks/type-aliases/successresult/)\<`result`\> \| [`ErrorResult`](/reference/filoz/synapse-core/mocks/type-aliases/errorresult/)\<`error`\> \| [`Subscription`](/reference/filoz/synapse-core/mocks/type-aliases/subscription/)\<`result`, `error`\>

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:118](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L118)

RPC response

## Type Declaration

### id

> **id**: `number`

### jsonrpc

> **jsonrpc**: `` `${number}` ``

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `result` | `any` |
| `error` | `any` |

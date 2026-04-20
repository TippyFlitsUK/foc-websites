---
title: asClient
next: true
prev: true
editUrl: false

---

> **asClient**(`client`): `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-core/chains/interfaces/chain/), `Account`\>

Defined in: [packages/synapse-core/src/chains.ts:362](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/chains.ts#L362)

Convert a viem client to a synapse client.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client. |

## Returns

`Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-core/chains/interfaces/chain/), `Account`\>

The synapse client.

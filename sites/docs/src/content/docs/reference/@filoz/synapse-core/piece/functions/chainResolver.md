---
title: chainResolver
next: true
prev: true
editUrl: false

---

> **chainResolver**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:121](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L121)

Resolve the piece URL from the chain

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ResolverFnOptionsType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfnoptionstype/) | [resolvePieceUrl.ResolverFnOptionsType](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfnoptionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The piece URL

## Throws

Errors [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) If no provider found

## Example

```ts
import { chainResolver } from '@filoz/synapse-core/piece'
const pieceUrl = await chainResolver({
  address: '0x1234567890123456789012345678901234567890',
  pieceCid: 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy',
  client: client,
})

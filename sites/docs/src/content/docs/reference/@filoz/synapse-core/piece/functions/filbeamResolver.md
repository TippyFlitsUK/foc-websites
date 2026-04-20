---
title: filbeamResolver
next: true
prev: true
editUrl: false

---

> **filbeamResolver**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:89](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L89)

Resolve the piece URL from the FilBeam CDN

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ResolverFnOptionsType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfnoptionstype/) | [resolvePieceUrl.ResolverFnOptionsType](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfnoptionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The piece URL

## Throws

Errors [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) If FilBeam is not supported on this chain

## Example

```ts
import { filbeamResolver } from '@filoz/synapse-core/piece'
const pieceUrl = await filbeamResolver({
  address: '0x1234567890123456789012345678901234567890',
  pieceCid: 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy',
  client: client,
})

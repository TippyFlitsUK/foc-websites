---
title: providersResolver
next: true
prev: true
editUrl: false

---

> **providersResolver**(`providers`): [`ResolverFnType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfntype/)

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:160](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L160)

Resolve the piece URL from the providers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `providers` | [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)[] | [\[\]](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/) |

## Returns

[`ResolverFnType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfntype/)

A resolver function that resolves the piece URL from the providers

## Throws

Errors [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) If no provider found

## Example

```ts
import { providersResolver } from '@filoz/synapse-core/piece'
const resolver = providersResolver(providers)
const pieceUrl = await resolver({
  pieceCid: 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy',
})

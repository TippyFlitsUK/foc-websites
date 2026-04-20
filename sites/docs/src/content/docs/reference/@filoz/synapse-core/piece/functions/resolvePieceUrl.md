---
title: resolvePieceUrl
next: true
prev: true
editUrl: false

---

> **resolvePieceUrl**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L58)

Resolve the piece URL from the available resolvers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/optionstype/) | [resolvePieceUrl.OptionsType](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The piece URL or throws an error if no URL is found

## Throws

Errors [AggregateError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) If no URL is found

## Example

```ts
import { resolvePieceUrl } from '@filoz/synapse-core/piece'
import { getApprovedPDPProviders } from '@filoz/synapse-core/sp-registry'
const providers = await getApprovedPDPProviders(client)

const pieceUrl = await resolvePieceUrl({
  client: client,
  address: '0x1234567890123456789012345678901234567890',
  pieceCid: 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy',
  resolvers: [filbeamResolver, chainResolver, providersResolver(providers)],
})
console.log(pieceUrl) // https://0x1234567890123456789012345678901234567890.mainnet.filbeam.io/bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy

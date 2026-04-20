---
title: createPieceUrl
next: true
prev: true
editUrl: false

---

> **createPieceUrl**(`options`): `string`

Defined in: [packages/synapse-core/src/utils/piece-url.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/piece-url.ts#L38)

Create a piece URL for the CDN or PDP API

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/utils/namespaces/createpieceurl/type-aliases/optionstype/) | [createPieceUrl.OptionsType](/reference/filoz/synapse-core/utils/namespaces/createpieceurl/type-aliases/optionstype/) |

## Returns

`string`

The piece URL

## Example

```ts
const pieceUrl = createPieceUrl({
  cid: 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy',
  cdn: true,
  address: '0x1234567890123456789012345678901234567890',
  chain: mainnet,
  serviceURL: 'https://pdp.example.com',
})
console.log(pieceUrl) // https://0x1234567890123456789012345678901234567890.mainnet.filbeam.io/bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy
```

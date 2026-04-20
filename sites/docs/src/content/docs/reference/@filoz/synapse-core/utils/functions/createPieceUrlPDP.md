---
title: createPieceUrlPDP
next: true
prev: true
editUrl: false

---

> **createPieceUrlPDP**(`options`): `string`

Defined in: [packages/synapse-core/src/utils/piece-url.ts:71](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/piece-url.ts#L71)

Create a piece URL for the PDP API

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/utils/namespaces/createpieceurlpdp/type-aliases/optionstype/) | [createPieceUrlPDP.OptionsType](/reference/filoz/synapse-core/utils/namespaces/createpieceurlpdp/type-aliases/optionstype/) |

## Returns

`string`

The PDP URL

## Example

```ts
const cid = 'bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy'
const pieceUrl = createPieceUrlPDP({ cid, serviceURL: 'https://pdp.example.com' })
console.log(pieceUrl) // https://pdp.example.com/piece/bafkzcibcd4bdomn3tgwgrh3g532zopskstnbrd2n3sxfqbze7rxt7vqn7veigmy
```

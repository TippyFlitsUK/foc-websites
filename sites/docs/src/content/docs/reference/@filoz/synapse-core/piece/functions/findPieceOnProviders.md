---
title: findPieceOnProviders
next: true
prev: true
editUrl: false

---

> **findPieceOnProviders**(`providers`, `pieceCid`, `signal?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/) \| `null` \| `undefined`\>

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:183](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L183)

Find the piece on the providers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `providers` | [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)[] | [\[\]](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/) |
| `pieceCid` | `PieceLink` | [PieceCID](/reference/filoz/synapse-core/piece/type-aliases/piececid/) |
| `signal?` | [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal) | [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/) \| `null` \| `undefined`\>

The piece URL

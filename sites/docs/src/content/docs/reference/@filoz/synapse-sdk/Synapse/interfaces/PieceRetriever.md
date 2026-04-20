---
title: PieceRetriever
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:192](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L192)

PieceRetriever interface for fetching pieces from various sources
Returns standard Web API Response objects for flexibility

## Properties

### fetchPiece

> **fetchPiece**: (`options`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [packages/synapse-sdk/src/types.ts:203](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L203)

Fetch a piece from available sources

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`PieceFetchOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/piecefetchoptions/) | Retrieval parameters |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

A Response object that can be processed for the piece data

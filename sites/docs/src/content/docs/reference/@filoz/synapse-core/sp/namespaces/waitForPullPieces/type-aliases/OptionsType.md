---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/optionstype/) & `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:398](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L398)

Options for waiting for pull pieces completion.

## Type Declaration

### onStatus?

> `optional` **onStatus?**: (`response`) => `void`

Callback invoked on each poll with current status.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/returntype/) |

#### Returns

`void`

### pollInterval?

> `optional` **pollInterval?**: `number`

The polling interval in milliseconds. Defaults to 4 seconds.

### timeout?

> `optional` **timeout?**: `number`

The timeout in milliseconds. Defaults to 5 minutes.

---
title: PDPVerifierOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L18)

## Properties

### dataSetLive?

> `optional` **dataSetLive?**: (`args`) => readonly \[`boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`boolean`\]

***

### getActivePieceCount?

> `optional` **getActivePieceCount?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`\]

***

### getActivePieces?

> `optional` **getActivePieces?**: (`args`) => readonly \[readonly `object`[], readonly `bigint`[], `boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`, `bigint`\] |

#### Returns

readonly \[readonly `object`[], readonly `bigint`[], `boolean`\]

***

### getDataSetLeafCount?

> `optional` **getDataSetLeafCount?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`\]

***

### getDataSetListener?

> `optional` **getDataSetListener?**: (`args`) => readonly \[`` `0x${string}` ``\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`` `0x${string}` ``\]

***

### getDataSetStorageProvider?

> `optional` **getDataSetStorageProvider?**: (`args`) => readonly \[`` `0x${string}` ``, `` `0x${string}` ``\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`` `0x${string}` ``, `` `0x${string}` ``\]

***

### getNextChallengeEpoch?

> `optional` **getNextChallengeEpoch?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`\]

***

### getNextPieceId?

> `optional` **getNextPieceId?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`\]

***

### getScheduledRemovals?

> `optional` **getScheduledRemovals?**: (`args`) => readonly \[readonly `bigint`[]\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/pdp.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/pdp.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[readonly `bigint`[]\]

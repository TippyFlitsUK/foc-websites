---
title: WarmStorageViewOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L25)

## Properties

### clientDataSets?

> `optional` **clientDataSets?**: (`args`) => [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\] \| readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\]\>

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"offset"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"limit"`; `type`: `"uint256"`; \}\] \| readonly \[\{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}\]\> |

#### Returns

[`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\] \| readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\]\>

***

### clientNonces?

> `optional` **clientNonces?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `bigint`\] |

#### Returns

readonly \[`bigint`\]

***

### getAllDataSetMetadata?

> `optional` **getAllDataSetMetadata?**: (`args`) => readonly \[readonly `string`[], readonly `string`[]\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[readonly `string`[], readonly `string`[]\]

***

### getAllPieceMetadata?

> `optional` **getAllPieceMetadata?**: (`args`) => readonly \[readonly `string`[], readonly `string`[]\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L36)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

#### Returns

readonly \[readonly `string`[], readonly `string`[]\]

***

### getApprovedProviders?

> `optional` **getApprovedProviders?**: (`args`) => readonly \[readonly `bigint`[]\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

#### Returns

readonly \[readonly `bigint`[]\]

***

### getClientDataSets?

> `optional` **getClientDataSets?**: (`args`) => [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\] \| readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\]\>

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"address"`; `name`: `"client"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"offset"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"limit"`; `type`: `"uint256"`; \}\] \| readonly \[\{ `internalType`: `"address"`; `name`: `"client"`; `type`: `"address"`; \}\]\> |

#### Returns

[`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\] \| readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\]\>

***

### getClientDataSetsLength?

> `optional` **getClientDataSetsLength?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

#### Returns

readonly \[`bigint`\]

***

### getDataSet?

> `optional` **getDataSet?**: (`args`) => readonly \[\{ `cacheMissRailId`: `bigint`; `cdnRailId`: `bigint`; `clientDataSetId`: `bigint`; `commissionBps`: `bigint`; `dataSetId`: `bigint`; `payee`: `` `0x${string}` ``; `payer`: `` `0x${string}` ``; `pdpEndEpoch`: `bigint`; `pdpRailId`: `bigint`; `providerId`: `bigint`; `serviceProvider`: `` `0x${string}` ``; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[\{ `cacheMissRailId`: `bigint`; `cdnRailId`: `bigint`; `clientDataSetId`: `bigint`; `commissionBps`: `bigint`; `dataSetId`: `bigint`; `payee`: `` `0x${string}` ``; `payer`: `` `0x${string}` ``; `pdpEndEpoch`: `bigint`; `pdpRailId`: `bigint`; `providerId`: `bigint`; `serviceProvider`: `` `0x${string}` ``; \}\]

***

### getDataSetMetadata?

> `optional` **getDataSetMetadata?**: (`args`) => readonly \[`boolean`, `string`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `string`\] |

#### Returns

readonly \[`boolean`, `string`\]

***

### getPDPConfig?

> `optional` **getPDPConfig?**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

#### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

***

### getPieceMetadata?

> `optional` **getPieceMetadata?**: (`args`) => readonly \[`boolean`, `string`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`, `string`\] |

#### Returns

readonly \[`boolean`, `string`\]

***

### isProviderApproved?

> `optional` **isProviderApproved?**: (`args`) => readonly \[`boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`boolean`\]

***

### railToDataSet?

> `optional` **railToDataSet?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/warm-storage.ts#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`\]

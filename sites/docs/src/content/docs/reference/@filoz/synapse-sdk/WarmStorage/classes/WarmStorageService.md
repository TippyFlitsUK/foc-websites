---
title: WarmStorageService
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L52)

## Constructors

### Constructor

> **new WarmStorageService**(`options`): `WarmStorageService`

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L63)

Create a new WarmStorageService instance

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `client`: `Client`\<`Transport`, `Chain`, `Account`\>; \} | Options for the WarmStorageService |
| `options.client` | `Client`\<`Transport`, `Chain`, `Account`\> | Wallet client |

#### Returns

`WarmStorageService`

A new WarmStorageService instance

## Methods

### addApprovedProvider()

> **addApprovedProvider**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:356](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L356)

Add an approved provider by ID (owner only)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerId`: `bigint`; \} | Options for the approved provider addition |
| `options.providerId` | `bigint` | Provider ID from registry |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response

***

### getAccountTotalStorageSize()

> **getAccountTotalStorageSize**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:204](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L204)

Get the total storage size across all live datasets for an account.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address?`: `` `0x${string}` ``; \} | Options for the total storage size query |
| `options.address?` | `` `0x${string}` `` | Address to query. Defaults to the client account address. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)\>

Total storage size and dataset count [getAccountTotalStorageSize.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/outputtype/)

#### Throws

Errors [getAccountTotalStorageSize.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/type-aliases/errortype/)

***

### getActivePieceCount()

> **getActivePieceCount**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:260](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L260)

Get the count of active pieces in a dataset (excludes removed pieces)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | Options for the data set |
| `options.dataSetId` | `bigint` | The PDPVerifier data set ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The number of active pieces

***

### getApprovedProviderIds()

> **getApprovedProviderIds**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:382](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L382)

Get list of approved provider IDs

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/outputtype/)\>

Array of approved provider IDs

***

### getClientDataSets()

> **getClientDataSets**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:112](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L112)

Get all data sets for a specific client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; \} | Options for the client data sets |
| `options.address` | `` `0x${string}` `` | The client address |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)\>

Array of data set information [getClientDataSets.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)

#### Throws

Errors [getClientDataSets.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/errortype/)

***

### getClientDataSetsWithDetails()

> **getClientDataSetsWithDetails**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnhancedDataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)[]\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:124](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L124)

Get all data sets for a client with enhanced details
This includes live status and management information

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address?`: `` `0x${string}` ``; `onlyManaged?`: `boolean`; \} | Options for the client data sets |
| `options.address?` | `` `0x${string}` `` | The client address. Defaults to the client account address. |
| `options.onlyManaged?` | `boolean` | If true, only return data sets managed by this Warm Storage contract. Defaults to false. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnhancedDataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)[]\>

Array of enhanced data set information [EnhancedDataSetInfo](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)

***

### getDataSet()

> **getDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:101](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L101)

Get a single data set by ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | Options for the data set |
| `options.dataSetId` | `bigint` | The data set ID to retrieve |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)\>

Data set information [getDataSet.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/outputtype/)

#### Throws

Errors [getDataSet.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/type-aliases/errortype/)

***

### getDataSetMetadata()

> **getDataSetMetadata**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:273](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L273)

Get all metadata for a data set

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | Options for the data set |
| `options.dataSetId` | `bigint` | The data set ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)\>

Object with metadata key-value pairs

***

### getDataSetMetadataByKey()

> **getDataSetMetadataByKey**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` \| `null`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:285](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L285)

Get specific metadata key for a data set

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; `key`: `string`; \} | Options for the data set |
| `options.dataSetId` | `bigint` | The data set ID |
| `options.key` | `string` | The metadata key to retrieve |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` \| `null`\>

The metadata value if it exists, null otherwise

***

### getOwner()

> **getOwner**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:405](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L405)

Get the contract owner address

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Owner address

***

### getPDPConfig()

> **getPDPConfig**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `challengesPerProof`: `bigint`; `challengeWindowSize`: `bigint`; `initChallengeWindowStart`: `bigint`; `maxProvingPeriod`: `bigint`; \}\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:428](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L428)

Get the PDP config from the WarmStorage contract.
Returns maxProvingPeriod, challengeWindowSize, challengesPerProof, initChallengeWindowStart

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `challengesPerProof`: `bigint`; `challengeWindowSize`: `bigint`; `initChallengeWindowStart`: `bigint`; `maxProvingPeriod`: `bigint`; \}\>

***

### getPieceMetadata()

> **getPieceMetadata**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:303](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L303)

Get all metadata for a piece in a data set

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; `pieceId`: `bigint`; \} | Options for the piece |
| `options.dataSetId` | `bigint` | The data set ID |
| `options.pieceId` | `bigint` | The piece ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)\>

Object with metadata key-value pairs

***

### getPieceMetadataByKey()

> **getPieceMetadataByKey**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` \| `null`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:316](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L316)

Get specific metadata key for a piece in a data set

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; `key`: `string`; `pieceId`: `bigint`; \} | Options for the piece |
| `options.dataSetId` | `bigint` | The data set ID |
| `options.key` | `string` | The metadata key to retrieve |
| `options.pieceId` | `bigint` | The piece ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` \| `null`\>

The metadata value if it exists, null otherwise

***

### getServicePrice()

> **getServicePrice**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:332](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L332)

Get the current service price per TiB per month

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/outputtype/)\>

Service price information for both CDN and non-CDN options

***

### isOwner()

> **isOwner**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:419](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L419)

Check if an address is the contract owner

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; \} | Options for the owner check |
| `options.address` | `` `0x${string}` `` | Address to check |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the address is the owner

***

### isProviderIdApproved()

> **isProviderIdApproved**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:392](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L392)

Check if a provider ID is approved

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerId`: `bigint`; \} | Options for the provider ID approval check |
| `options.providerId` | `bigint` | Provider ID to check |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the provider is approved

***

### removeApprovedProvider()

> **removeApprovedProvider**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:366](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L366)

Remove an approved provider by ID (owner only)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerId`: `bigint`; \} | Options for the approved provider removal |
| `options.providerId` | `bigint` | Provider ID from registry |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response

***

### terminateDataSet()

> **terminateDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:344](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L344)

Terminate a data set with given ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | Options for the data set termination |
| `options.dataSetId` | `bigint` | ID of the data set to terminate |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction receipt

***

### topUpCDNPaymentRails()

> **topUpCDNPaymentRails**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:462](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L462)

Increments the fixed locked-up amounts for CDN payment rails.

This method tops up the prepaid balance for CDN services by adding to the existing
lockup amounts. Both CDN and cache miss rails can be incremented independently.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `cacheMissAmountToAdd`: `bigint`; `cdnAmountToAdd`: `bigint`; `dataSetId`: `bigint`; \} | Options for the top up CDN payment rails |
| `options.cacheMissAmountToAdd` | `bigint` | Amount to add to the cache miss rail lockup |
| `options.cdnAmountToAdd` | `bigint` | Amount to add to the CDN rail lockup |
| `options.dataSetId` | `bigint` | The ID of the data set |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response Hash

***

### validateDataSet()

> **validateDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:223](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L223)

Validate that a dataset is live and managed by this WarmStorage contract

Performs validation checks in parallel:
- Dataset exists and is live
- Dataset is managed by this WarmStorage contract

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | Options for the data set |
| `options.dataSetId` | `bigint` | The PDPVerifier data set ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Throws

if dataset is not valid for operations

***

### create()

> `static` **create**(`options`): `WarmStorageService`

Defined in: [packages/synapse-sdk/src/warm-storage/service.ts:77](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/warm-storage/service.ts#L77)

Create a new WarmStorageService with pre-configured client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `account`: `Account`; `chain?`: `Chain`; `transport?`: `Transport`; \} | Options for the WarmStorageService |
| `options.account` | `Account` | Viem account (required) |
| `options.chain?` | `Chain` | Filecoin chain (optional, defaults to [DEFAULT\_CHAIN](/reference/filoz/synapse-sdk/synapse/variables/default_chain/)) |
| `options.transport?` | `Transport` | Viem transport (optional, defaults to http()) |

#### Returns

`WarmStorageService`

A new [WarmStorageService](/reference/filoz/synapse-sdk/warmstorage/classes/warmstorageservice/) instance

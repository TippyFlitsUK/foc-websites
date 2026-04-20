---
title: Synapse
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/synapse.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L27)

Class for interacting with Filecoin storage and other on-chain services

## Constructors

### Constructor

> **new Synapse**(`options`): `Synapse`

Defined in: [packages/synapse-sdk/src/synapse.ts:75](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L75)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SynapseFromClientOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/synapsefromclientoptions/) |

#### Returns

`Synapse`

## Accessors

### chain

#### Get Signature

> **get** **chain**(): [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/)

Defined in: [packages/synapse-sdk/src/synapse.ts:103](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L103)

##### Returns

[`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/)

***

### client

#### Get Signature

> **get** **client**(): `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), `Account`, `PublicRpcSchema`, `PublicActions`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/)\>\>

Defined in: [packages/synapse-sdk/src/synapse.ts:95](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L95)

##### Returns

`Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), `Account`, `PublicRpcSchema`, `PublicActions`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/)\>\>

***

### filbeam

#### Get Signature

> **get** **filbeam**(): [`FilBeamService`](/reference/filoz/synapse-sdk/filbeam/classes/filbeamservice/)

Defined in: [packages/synapse-sdk/src/synapse.ts:129](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L129)

Gets the FilBeam service instance

##### Returns

[`FilBeamService`](/reference/filoz/synapse-sdk/filbeam/classes/filbeamservice/)

The FilBeam service for interacting with FilBeam infrastructure

***

### payments

#### Get Signature

> **get** **payments**(): [`PaymentsService`](/reference/filoz/synapse-sdk/payments/classes/paymentsservice/)

Defined in: [packages/synapse-sdk/src/synapse.ts:111](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L111)

Gets the payment service instance

##### Returns

[`PaymentsService`](/reference/filoz/synapse-sdk/payments/classes/paymentsservice/)

The payment service

***

### providers

#### Get Signature

> **get** **providers**(): [`SPRegistryService`](/reference/filoz/synapse-sdk/spregistry/classes/spregistryservice/)

Defined in: [packages/synapse-sdk/src/synapse.ts:138](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L138)

Gets the service provider registry instance

##### Returns

[`SPRegistryService`](/reference/filoz/synapse-sdk/spregistry/classes/spregistryservice/)

The service provider registry for interacting with service providers

***

### sessionClient

#### Get Signature

> **get** **sessionClient**(): `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), \{ `address`: `` `0x${string}` ``; `keyType`: `"Secp256k1"`; `nonceManager?`: `NonceManager`; `publicKey`: `` `0x${string}` ``; `rootAddress`: `` `0x${string}` ``; `sign`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signAuthorization`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`SignAuthorizationReturnType`\>; `signMessage`: (`__namedParameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTransaction`: \<`serializer`, `transaction`\>(`transaction`, `options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTypedData`: \<`typedData`, `primaryType`\>(`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `source`: `"sessionKey"`; `type`: `"local"`; \}\> \| `undefined`

Defined in: [packages/synapse-sdk/src/synapse.ts:99](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L99)

##### Returns

`Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), \{ `address`: `` `0x${string}` ``; `keyType`: `"Secp256k1"`; `nonceManager?`: `NonceManager`; `publicKey`: `` `0x${string}` ``; `rootAddress`: `` `0x${string}` ``; `sign`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signAuthorization`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`SignAuthorizationReturnType`\>; `signMessage`: (`__namedParameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTransaction`: \<`serializer`, `transaction`\>(`transaction`, `options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTypedData`: \<`typedData`, `primaryType`\>(`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `source`: `"sessionKey"`; `type`: `"local"`; \}\> \| `undefined`

***

### storage

#### Get Signature

> **get** **storage**(): [`StorageManager`](/reference/filoz/synapse-sdk/storage/classes/storagemanager/)

Defined in: [packages/synapse-sdk/src/synapse.ts:120](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L120)

Gets the storage manager instance

##### Returns

[`StorageManager`](/reference/filoz/synapse-sdk/storage/classes/storagemanager/)

The storage manager for all storage operations

## Methods

### getProviderInfo()

> **getProviderInfo**(`providerAddress`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)\>

Defined in: [packages/synapse-sdk/src/synapse.ts:147](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L147)

Get detailed information about a specific service provider

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `providerAddress` | `bigint` \| `` `0x${string}` `` | The provider's address or provider ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)\>

Provider information including URLs and pricing

***

### create()

> `static` **create**(`options`): `Synapse`

Defined in: [packages/synapse-sdk/src/synapse.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/synapse.ts#L46)

Create a new Synapse instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`SynapseOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/synapseoptions/) | Configuration options for Synapse |

#### Returns

`Synapse`

A fully initialized Synapse instance

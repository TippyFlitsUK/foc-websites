---
title: SPRegistryService
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L41)

## Constructors

### Constructor

> **new SPRegistryService**(`options`): `SPRegistryService`

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L49)

Constructor for SPRegistryService

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `client`: `Client`\<`Transport`, `Chain`, `Account`\>; \} | Options for the SPRegistryService |
| `options.client` | `Client`\<`Transport`, `Chain`, `Account`\> | Wallet client used for read and write operations |

#### Returns

`SPRegistryService`

## Methods

### activeProviderCount()

> **activeProviderCount**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:267](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L267)

Get number of active providers

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Active provider count

***

### addPDPProduct()

> **addPDPProduct**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:280](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L280)

Add PDP product to provider

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `capabilities?`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>; `pdpOffering`: [`PDPOffering`](/reference/filoz/synapse-sdk/spregistry/interfaces/pdpoffering/); \} | Options for adding a PDP product |
| `options.capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | Optional capability keys |
| `options.pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-sdk/spregistry/interfaces/pdpoffering/) | PDP offering details |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash

***

### getActiveProvidersByProductType()

> **getActiveProvidersByProductType**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`[]\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:210](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L210)

Get active providers by product type (handles pagination internally)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `productType`: `0`; \} | Options for provider filtering |
| `options.productType` | `0` | Product type to filter by |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`[]\>

List of providers with specified product type

***

### getAllActiveProviders()

> **getAllActiveProviders**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)[]\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:182](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L182)

Get all active providers (handles pagination internally)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)[]\>

List of all active providers

***

### getProvider()

> **getProvider**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) \| `null`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:142](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L142)

Get provider information by ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerId`: `bigint`; \} | Options for provider lookup |
| `options.providerId` | `bigint` | Provider ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) \| `null`\>

Provider info with decoded products

***

### getProviderByAddress()

> **getProviderByAddress**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) \| `null`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:159](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L159)

Get provider information by address

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; \} | Options for provider lookup |
| `options.address` | `` `0x${string}` `` | Provider address |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) \| `null`\>

Provider info with decoded products

***

### getProviderCount()

> **getProviderCount**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:259](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L259)

Get total number of providers

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Total provider count

***

### getProviderIdByAddress()

> **getProviderIdByAddress**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:174](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L174)

Get provider ID by address

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; \} | Options for provider ID lookup |
| `options.address` | `` `0x${string}` `` | Provider address |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Provider ID (0 if not found)

***

### getProviders()

> **getProviders**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)[]\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:327](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L327)

Get multiple providers by IDs using Multicall3 for efficiency

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerIds`: `bigint`[]; \} | Options for provider batch lookup |
| `options.providerIds` | `bigint`[] | Array of provider IDs |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)[]\>

Array of provider info

***

### isProviderActive()

> **isProviderActive**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:241](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L241)

Check if provider is active

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `providerId`: `bigint`; \} | Options for provider status lookup |
| `options.providerId` | `bigint` | Provider ID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether provider is active

***

### isRegisteredProvider()

> **isRegisteredProvider**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:251](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L251)

Check if address is a registered provider

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; \} | Options for provider registration lookup |
| `options.address` | `` `0x${string}` `` | Address to check |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether address is registered

***

### registerProvider()

> **registerProvider**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:100](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L100)

Register as a new service provider with optional PDP product

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ProviderRegistrationInfo`](/reference/filoz/synapse-sdk/spregistry/interfaces/providerregistrationinfo/) | [ProviderRegistrationInfo](/reference/filoz/synapse-sdk/spregistry/interfaces/providerregistrationinfo/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Example

```ts
const hash = await spRegistry.registerProvider({
  payee: '0x...', // Address that will receive payments
  name: 'My Storage Provider',
  description: 'High-performance storage service',
  pdpOffering: {
    serviceURL: 'https://provider.example.com',
    minPieceSizeInBytes: SIZE_CONSTANTS.KiB,
    maxPieceSizeInBytes: SIZE_CONSTANTS.GiB,
    // ... other PDP fields
  },
  capabilities: { 'region': 'us-east', 'tier': 'premium' }
})

console.log(hash)
```

***

### removeProduct()

> **removeProduct**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:311](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L311)

Remove product from provider

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `productType`: `0`; \} | Options for product removal |
| `options.productType` | `0` | Type of product to remove |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash

***

### removeProvider()

> **removeProvider**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:130](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L130)

Remove provider registration

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response

***

### updatePDPProduct()

> **updatePDPProduct**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:296](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L296)

Update PDP product with capabilities

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `capabilities?`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>; `pdpOffering`: [`PDPOffering`](/reference/filoz/synapse-sdk/spregistry/interfaces/pdpoffering/); \} | Options for updating a PDP product |
| `options.capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | Updated capability key-value pairs |
| `options.pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-sdk/spregistry/interfaces/pdpoffering/) | Updated PDP offering |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash

***

### updateProviderInfo()

> **updateProviderInfo**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:119](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L119)

Update provider information

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `description`: `string`; `name`: `string`; \} | Options for provider info updates |
| `options.description` | `string` | New description |
| `options.name` | `string` | New name |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response

***

### create()

> `static` **create**(`options`): `SPRegistryService`

Defined in: [packages/synapse-sdk/src/sp-registry/service.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/sp-registry/service.ts#L60)

Create a new SPRegistryService instance

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `account`: `Account`; `chain?`: `Chain`; `transport?`: `Transport`; \} | Options for the SPRegistryService |
| `options.account` | `Account` | Viem account (required) |
| `options.chain?` | `Chain` | Filecoin chain (optional, defaults to [DEFAULT\_CHAIN](/reference/filoz/synapse-sdk/synapse/variables/default_chain/)) |
| `options.transport?` | `Transport` | Viem transport (optional, defaults to http()) |

#### Returns

`SPRegistryService`

---
title: ServiceRegistryOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:47](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L47)

## Properties

### activeProviderCount?

> `optional` **activeProviderCount?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L63)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

#### Returns

readonly \[`bigint`\]

***

### addProduct?

> `optional` **addProduct?**: (`args`, `value`, `from`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L82)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[\]

***

### getAllActiveProviders?

> `optional` **getAllActiveProviders?**: (`args`) => readonly \[readonly `bigint`[], `boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:59](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L59)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

#### Returns

readonly \[readonly `bigint`[], `boolean`\]

***

### getProvider?

> `optional` **getProvider?**: (`args`) => readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L52)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

***

### getProviderByAddress?

> `optional` **getProviderByAddress?**: (`args`) => readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

#### Returns

readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

***

### getProviderCount?

> `optional` **getProviderCount?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

#### Returns

readonly \[`bigint`\]

***

### getProviderIdByAddress?

> `optional` **getProviderIdByAddress?**: (`args`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

#### Returns

readonly \[`bigint`\]

***

### getProvidersByProductType?

> `optional` **getProvidersByProductType?**: (`args`) => readonly \[\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L56)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, `boolean`, `bigint`, `bigint`\] |

#### Returns

readonly \[\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\]

***

### getProviderWithProduct?

> `optional` **getProviderWithProduct?**: (`args`) => readonly \[\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `number`\] |

#### Returns

readonly \[\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\]

***

### isProviderActive?

> `optional` **isProviderActive?**: (`args`) => readonly \[`boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L64)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`boolean`\]

***

### isRegisteredProvider?

> `optional` **isRegisteredProvider?**: (`args`) => readonly \[`boolean`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

#### Returns

readonly \[`boolean`\]

***

### registerProvider?

> `optional` **registerProvider?**: (`args`, `value`, `from`) => readonly \[`bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:67](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `string`, `string`, `number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[`bigint`\]

***

### REGISTRATION\_FEE?

> `optional` **REGISTRATION\_FEE?**: () => `bigint`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L66)

#### Returns

`bigint`

***

### removeProduct?

> `optional` **removeProduct?**: (`args`, `value`, `from`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:88](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L88)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[\]

***

### removeProvider?

> `optional` **removeProvider?**: (`args`, `value`, `from`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:77](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L77)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[\]

***

### updateProduct?

> `optional` **updateProduct?**: (`args`, `value`, `from`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:83](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L83)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[\]

***

### updateProviderInfo?

> `optional` **updateProviderInfo?**: (`args`, `value`, `from`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/service-registry.ts:72](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/service-registry.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`string`, `string`\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

#### Returns

readonly \[\]

---
title: FilBeamService
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L51)

Service for interacting with FilBeam infrastructure and APIs.

## Example

```typescript
// Create service with network detection
const synapse = await Synapse.create({ privateKey, rpcURL })
const stats = await synapse.filbeam.getDataSetStats(12345)

// Monitor remaining pay-per-byte quotas
const service = new FilBeamService('mainnet')
const stats = await service.getDataSetStats(12345)
console.log('Remaining CDN Egress (cache hits):', stats.cdnEgressQuota)
console.log('Remaining Cache Miss Egress:', stats.cacheMissEgressQuota)
```

## Remarks

All quota values are returned as BigInt for precision when handling large byte values.

## See

[FilBeam Documentation](https://docs.filbeam.com) for detailed API specifications and usage guides

## Constructors

### Constructor

> **new FilBeamService**(`chain`, `fetchImpl?`): `FilBeamService`

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:55](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L55)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `chain` | [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/) | `undefined` |
| `fetchImpl` | \{(`input`, `init?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>; (`input`, `init?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>; \} | `globalThis.fetch` |

#### Returns

`FilBeamService`

## Methods

### getDataSetStats()

> **getDataSetStats**(`dataSetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DataSetStats`](/reference/filoz/synapse-sdk/filbeam/interfaces/datasetstats/)\>

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:125](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L125)

Retrieves remaining pay-per-byte statistics for a specific data set from FilBeam.

Fetches the remaining CDN and cache miss egress quotas for a data set. These quotas
track how many bytes can still be retrieved through FilBeam's trusted measurement layer
before needing to add more credits:

- **CDN Egress Quota**: Remaining bytes that can be served from FilBeam's cache (fast, direct delivery)
- **Cache Miss Egress Quota**: Remaining bytes that can be retrieved from storage providers (triggers caching)

Both types of egress are billed based on volume. Query current pricing via
WarmStorageService.getServicePrice or see https://docs.filbeam.com for rates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dataSetId` | `string` \| `number` | The unique identifier of the data set to query |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DataSetStats`](/reference/filoz/synapse-sdk/filbeam/interfaces/datasetstats/)\>

A promise that resolves to the data set statistics with remaining quotas as BigInt values

#### Throws

Throws an error if:
- The data set is not found (404)
- The API returns an invalid response format
- Network or other HTTP errors occur

#### Example

```typescript
try {
  const stats = await service.getDataSetStats('my-dataset-123')

  // Display remaining quotas
  console.log(`Remaining CDN Egress: ${stats.cdnEgressQuota} bytes`)
  console.log(`Remaining Cache Miss: ${stats.cacheMissEgressQuota} bytes`)
} catch (error) {
  console.error('Failed to get stats:', error.message)
}
```

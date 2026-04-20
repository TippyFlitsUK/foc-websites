---
title: DataSetStats
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L25)

Data set statistics from FilBeam.

These quotas represent the remaining pay-per-byte allocation available for data retrieval
through FilBeam's trusted measurement layer. The values decrease as data is served and
represent how many bytes can still be retrieved before needing to add more credits.

 DataSetStats

## Properties

### cacheMissEgressQuota

> **cacheMissEgressQuota**: `bigint`

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L27)

The remaining egress quota for cache misses (data retrieved from storage providers) in bytes

***

### cdnEgressQuota

> **cdnEgressQuota**: `bigint`

Defined in: [packages/synapse-sdk/src/filbeam/service.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/filbeam/service.ts#L26)

The remaining CDN egress quota for cache hits (data served directly from FilBeam's cache) in bytes

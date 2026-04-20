---
title: PdpDataSet
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/warm-storage/types.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L51)

Data set information returned from Warm Storage contract

## Extends

- [`DataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/datasetinfo/).[`PdpDataSetInfo`](/reference/filoz/synapse-core/warm-storage/type-aliases/pdpdatasetinfo/)

## Extended by

- [`DataSetWithPieces`](/reference/filoz/synapse-react/interfaces/datasetwithpieces/)

## Properties

### activePieceCount

> **activePieceCount**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L48)

Number of active (non-zero) pieces in the data set.

#### Inherited from

`PdpDataSetInfo.activePieceCount`

***

### cacheMissRailId

> **cacheMissRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L15)

Payment rail ID for cache-miss egress.

#### Inherited from

`DataSetInfo.cacheMissRailId`

***

### cdn

> **cdn**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L42)

Whether the data set is using CDN.

#### Inherited from

`PdpDataSetInfo.cdn`

***

### cdnRailId

> **cdnRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L17)

Payment rail ID for CDN egress.

#### Inherited from

`DataSetInfo.cdnRailId`

***

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L27)

Client-provided data set ID (nonce).

#### Inherited from

`DataSetInfo.clientDataSetId`

***

### commissionBps

> **commissionBps**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L25)

Commission in basis points.

#### Inherited from

`DataSetInfo.commissionBps`

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L33)

Data set ID.

#### Inherited from

`DataSetInfo.dataSetId`

***

### live

> **live**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L38)

Whether the data set is live in the PDP Verifier contract.

#### Inherited from

`PdpDataSetInfo.live`

***

### managed

> **managed**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L40)

Whether the data set is managed by the current Warm Storage contract.

#### Inherited from

`PdpDataSetInfo.managed`

***

### metadata

> **metadata**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: [packages/synapse-core/src/warm-storage/types.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L44)

Metadata associated with the data set.

#### Inherited from

`PdpDataSetInfo.metadata`

***

### payee

> **payee**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/warm-storage/types.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L21)

Payee address for data set storage.

#### Inherited from

`DataSetInfo.payee`

***

### payer

> **payer**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/warm-storage/types.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L19)

Payer address for data set storage.

#### Inherited from

`DataSetInfo.payer`

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L29)

End epoch for PDP service.

#### Inherited from

`DataSetInfo.pdpEndEpoch`

***

### pdpRailId

> **pdpRailId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L13)

Payment rail ID for PDP proofs.

#### Inherited from

`DataSetInfo.pdpRailId`

***

### provider

> **provider**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

Defined in: [packages/synapse-core/src/warm-storage/types.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L46)

PDP provider associated with the data set.

#### Inherited from

`PdpDataSetInfo.provider`

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/types.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L31)

Provider ID for the data set.

#### Inherited from

`DataSetInfo.providerId`

***

### serviceProvider

> **serviceProvider**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/warm-storage/types.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/types.ts#L23)

Service provider address.

#### Inherited from

`DataSetInfo.serviceProvider`

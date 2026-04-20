---
title: DataSetWithPieces
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/warm-storage/use-data-sets.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-data-sets.ts#L7)

Data set information returned from Warm Storage contract

## Extends

- [`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/)

## Properties

### activePieceCount

> **activePieceCount**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:25

Number of active (non-zero) pieces in the data set.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`activePieceCount`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#activepiececount)

***

### cacheMissRailId

> **cacheMissRailId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:8

Payment rail ID for cache-miss egress.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`cacheMissRailId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#cachemissrailid)

***

### cdn

> **cdn**: `boolean`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:22

Whether the data set is using CDN.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`cdn`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#cdn)

***

### cdnRailId

> **cdnRailId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:9

Payment rail ID for CDN egress.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`cdnRailId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#cdnrailid)

***

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:14

Client-provided data set ID (nonce).

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`clientDataSetId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#clientdatasetid)

***

### commissionBps

> **commissionBps**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:13

Commission in basis points.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`commissionBps`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#commissionbps)

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:17

Data set ID.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`dataSetId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#datasetid)

***

### live

> **live**: `boolean`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:20

Whether the data set is live in the PDP Verifier contract.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`live`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#live)

***

### managed

> **managed**: `boolean`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:21

Whether the data set is managed by the current Warm Storage contract.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`managed`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#managed)

***

### metadata

> **metadata**: [`MetadataObject`](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:23

Metadata associated with the data set.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`metadata`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#metadata)

***

### payee

> **payee**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:11

Payee address for data set storage.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`payee`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#payee)

***

### payer

> **payer**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:10

Payer address for data set storage.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`payer`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#payer)

***

### pdpEndEpoch

> **pdpEndEpoch**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:15

End epoch for PDP service.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`pdpEndEpoch`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#pdpendepoch)

***

### pdpRailId

> **pdpRailId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:7

Payment rail ID for PDP proofs.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`pdpRailId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#pdprailid)

***

### pieces

> **pieces**: [`PieceWithMetadata`](/reference/filoz/synapse-core/warm-storage/interfaces/piecewithmetadata/)[]

Defined in: [synapse-react/src/warm-storage/use-data-sets.ts:8](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-data-sets.ts#L8)

***

### provider

> **provider**: [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:24

PDP provider associated with the data set.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`provider`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#provider)

***

### providerId

> **providerId**: `bigint`

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:16

Provider ID for the data set.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`providerId`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#providerid)

***

### serviceProvider

> **serviceProvider**: `` `0x${string}` ``

Defined in: synapse-core/dist/src/warm-storage/types.d.ts:12

Service provider address.

#### Inherited from

[`PdpDataSet`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/).[`serviceProvider`](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/#serviceprovider)

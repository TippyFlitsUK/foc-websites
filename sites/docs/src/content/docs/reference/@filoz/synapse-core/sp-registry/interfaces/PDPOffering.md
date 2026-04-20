---
title: PDPOffering
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/sp-registry/types.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L33)

PDP offering details (decoded from capability k/v pairs)

## See

https://github.com/FilOzone/filecoin-services/blob/a86e4a5018133f17a25b4bb6b5b99da4d34fe664/service_contracts/src/ServiceProviderRegistry.sol#L14

## Properties

### extraCapabilities?

> `optional` **extraCapabilities?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/types.ts:79](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L79)

Additional non-standard capabilities declared by the provider.
Keys are capability names as registered on-chain (plain strings),
values are the raw hex-encoded bytes from the contract.

***

### ipniIpfs

> **ipniIpfs**: `boolean`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:69](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L69)

Whether the service supports IPNI IPFS.

***

### ipniPeerId?

> `optional` **ipniPeerId?**: `string`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:73](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L73)

The IPNI peer ID.

***

### ipniPiece

> **ipniPiece**: `boolean`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L65)

Whether the service supports IPNI piece.

***

### location

> **location**: `string`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:57](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L57)

Geographic location of the service provider

***

### maxPieceSizeInBytes

> **maxPieceSizeInBytes**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L45)

The maximum piece size in bytes.

***

### minPieceSizeInBytes

> **minPieceSizeInBytes**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L41)

The minimum piece size in bytes.

***

### minProvingPeriodInEpochs

> **minProvingPeriodInEpochs**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:53](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L53)

The minimum proving period in epochs.

***

### paymentTokenAddress

> **paymentTokenAddress**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/sp-registry/types.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L61)

Token contract for payment (IERC20(address(0)) for FIL)

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L37)

The URL of the service.

***

### storagePricePerTibPerDay

> **storagePricePerTibPerDay**: `bigint`

Defined in: [packages/synapse-core/src/sp-registry/types.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/types.ts#L49)

Storage price per TiB per day (in token's smallest unit).

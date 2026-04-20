---
title: parseAllPieceMetadata
next: true
prev: true
editUrl: false

---

> **parseAllPieceMetadata**(`data`): [`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:137](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L137)

Parse the contract output into a MetadataObject

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[readonly `string`[], readonly `string`[]\] | The contract output from the getAllPieceMetadata function [getAllPieceMetadata.ContractOutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/contractoutputtype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/outputtype/)

The metadata formatted as a MetadataObject [getAllPieceMetadata.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/type-aliases/outputtype/)

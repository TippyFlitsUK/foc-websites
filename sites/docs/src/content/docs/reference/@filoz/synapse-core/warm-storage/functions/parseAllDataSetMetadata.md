---
title: parseAllDataSetMetadata
next: true
prev: true
editUrl: false

---

> **parseAllDataSetMetadata**(`data`): [`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/warm-storage/get-all-data-set-metadata.ts:134](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-data-set-metadata.ts#L134)

Parse the contract output into a MetadataObject

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[readonly `string`[], readonly `string`[]\] | The contract output from the getAllDataSetMetadata function [getAllDataSetMetadata.ContractOutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/contractoutputtype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/outputtype/)

The metadata formatted as a MetadataObject [getAllDataSetMetadata.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/type-aliases/outputtype/)

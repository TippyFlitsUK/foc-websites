---
title: parseActivePieces
next: true
prev: true
editUrl: false

---

> **parseActivePieces**(`data`): [`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:136](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L136)

Parse the contract output into a [getActivePieces.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly \[readonly `object`[], readonly `bigint`[], `boolean`\] | The contract output from the getActivePieces function [getActivePieces.ContractOutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/contractoutputtype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)

The active pieces for the data set [getActivePieces.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/)

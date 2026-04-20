---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:50](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L50)

## Properties

### clientDataSetId

> **clientDataSetId**: `bigint`

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L56)

The client data set id (nonce) to use for the signature. Must be unique for each data set.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:54](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L54)

The data set ID to delete the piece from.

***

### pieceId

> **pieceId**: `bigint`

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L52)

The piece ID to delete.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L58)

The service URL of the PDP API.

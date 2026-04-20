---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = [`PullToExistingDataSetOptions`](/reference/filoz/synapse-core/sp/type-aliases/pulltoexistingdatasetoptions/) \| [`PullToNewDataSetOptions`](/reference/filoz/synapse-core/sp/type-aliases/pulltonewdatasetoptions/)

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:290](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L290)

Options for pulling pieces from external SPs.
Use dataSetId > 0n to add to an existing data set, or omit/0n to create a new one.

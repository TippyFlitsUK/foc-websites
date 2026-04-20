---
title: PullSource
next: true
prev: true
editUrl: false

---

> **PullSource** = `string` \| ((`pieceCid`) => `string`)

Defined in: [packages/synapse-sdk/src/types.ts:569](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L569)

Source for pulling pieces from another provider.
Either a base URL string or a function that returns a piece URL for a given PieceCID.

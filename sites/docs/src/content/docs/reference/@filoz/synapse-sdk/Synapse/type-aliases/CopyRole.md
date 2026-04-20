---
title: CopyRole
next: true
prev: true
editUrl: false

---

> **CopyRole** = `"primary"` \| `"secondary"`

Defined in: [packages/synapse-sdk/src/types.ts:459](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L459)

Role of a copy in a multi-provider upload.

- `'primary'`: The provider that received the original upload (store).
- `'secondary'`: A provider that pulled the data from the primary (SP-to-SP transfer).

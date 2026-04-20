---
title: CDN_FIXED_LOCKUP
next: true
prev: true
editUrl: false

---

> `const` **CDN\_FIXED\_LOCKUP**: `object`

Defined in: [packages/synapse-core/src/utils/constants.ts:117](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/constants.ts#L117)

CDN fixed lockup amounts charged at dataset creation time.
These are one-time lockups for CDN egress and cache miss egress rails.

## Type Declaration

### cacheMiss

> `readonly` **cacheMiss**: `300000000000000000n` = `300_000_000_000_000_000n`

Cache miss egress rail fixed lockup: 0.3 USDFC

### cdn

> `readonly` **cdn**: `700000000000000000n` = `700_000_000_000_000_000n`

CDN egress rail fixed lockup: 0.7 USDFC

### total

> `readonly` **total**: `1000000000000000000n` = `1_000_000_000_000_000_000n`

Total: 1.0 USDFC

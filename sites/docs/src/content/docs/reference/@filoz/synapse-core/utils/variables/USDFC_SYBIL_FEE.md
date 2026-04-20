---
title: USDFC_SYBIL_FEE
next: true
prev: true
editUrl: false

---

> `const` **USDFC\_SYBIL\_FEE**: `100000000000000000n` = `100_000_000_000_000_000n`

Defined in: [packages/synapse-core/src/utils/constants.ts:131](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/constants.ts#L131)

USDFC sybil fee charged on new dataset creation.
Extracted from client funds into the payments auction pool to prevent state-growth spam.
Matches PDPVerifier.USDFC_SYBIL_FEE (immutable, only changes with contract upgrade).

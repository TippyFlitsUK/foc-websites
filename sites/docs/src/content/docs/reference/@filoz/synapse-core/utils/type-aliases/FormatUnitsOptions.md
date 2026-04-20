---
title: FormatUnitsOptions
next: true
prev: true
editUrl: false

---

> **FormatUnitsOptions** = `object`

Defined in: [packages/synapse-core/src/utils/format.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L32)

## Properties

### compact?

> `optional` **compact?**: `boolean`

Defined in: [packages/synapse-core/src/utils/format.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L45)

Compact formatting (e.g. “1,000” becomes “1K”).

***

### decimals?

> `optional` **decimals?**: `number`

Defined in: [packages/synapse-core/src/utils/format.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L37)

The number of decimals.
If not provided, the default is 18.

***

### decimalsRounding?

> `optional` **decimalsRounding?**: `"ROUND_HALF"` \| `"ROUND_UP"` \| `"ROUND_DOWN"`

Defined in: [packages/synapse-core/src/utils/format.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L60)

Method used to round to digits decimals (defaults to "ROUND_HALF").

***

### digits?

> `optional` **digits?**: `number`

Defined in: [packages/synapse-core/src/utils/format.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L41)

The number of digits to display after the decimal point.

***

### locale?

> `optional` **locale?**: `Intl.LocalesArgument`

Defined in: [packages/synapse-core/src/utils/format.ts:55](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L55)

The locale to use for formatting.

#### See

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument

***

### signDisplay?

> `optional` **signDisplay?**: `"auto"` \| `"always"` \| `"exceptZero"` \| `"negative"` \| `"never"`

Defined in: [packages/synapse-core/src/utils/format.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L66)

How to display the sign of the number (defaults to "auto").

#### See

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay

***

### trailingZeros?

> `optional` **trailingZeros?**: `boolean`

Defined in: [packages/synapse-core/src/utils/format.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/format.ts#L49)

Add trailing zeros if any, following the number of digits.

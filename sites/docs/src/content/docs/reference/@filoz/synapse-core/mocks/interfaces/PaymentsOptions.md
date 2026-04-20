---
title: PaymentsOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L28)

## Properties

### accounts?

> `optional` **accounts?**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``\] |

#### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

***

### deposit?

> `optional` **deposit?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`\] |

#### Returns

readonly \[\]

***

### depositWithPermit?

> `optional` **depositWithPermit?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `number`, `` `0x${string}` ``, `` `0x${string}` ``\] |

#### Returns

readonly \[\]

***

### depositWithPermitAndApproveOperator?

> `optional` **depositWithPermitAndApproveOperator?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `number`, `` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `bigint`\] |

#### Returns

readonly \[\]

***

### getRail?

> `optional` **getRail?**: (`args`) => readonly \[\{ `commissionRateBps`: `bigint`; `endEpoch`: `bigint`; `from`: `` `0x${string}` ``; `lockupFixed`: `bigint`; `lockupPeriod`: `bigint`; `operator`: `` `0x${string}` ``; `paymentRate`: `bigint`; `serviceFeeRecipient`: `` `0x${string}` ``; `settledUpTo`: `bigint`; `to`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; `validator`: `` `0x${string}` ``; \}\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[\{ `commissionRateBps`: `bigint`; `endEpoch`: `bigint`; `from`: `` `0x${string}` ``; `lockupFixed`: `bigint`; `lockupPeriod`: `bigint`; `operator`: `` `0x${string}` ``; `paymentRate`: `bigint`; `serviceFeeRecipient`: `` `0x${string}` ``; `settledUpTo`: `bigint`; `to`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; `validator`: `` `0x${string}` ``; \}\]

***

### getRailsForPayeeAndToken?

> `optional` **getRailsForPayeeAndToken?**: (`args`) => readonly \[readonly `object`[], `bigint`, `bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`\] |

#### Returns

readonly \[readonly `object`[], `bigint`, `bigint`\]

***

### getRailsForPayerAndToken?

> `optional` **getRailsForPayerAndToken?**: (`args`) => readonly \[readonly `object`[], `bigint`, `bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`\] |

#### Returns

readonly \[readonly `object`[], `bigint`, `bigint`\]

***

### operatorApprovals?

> `optional` **operatorApprovals?**: (`args`) => readonly \[`boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``\] |

#### Returns

readonly \[`boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\]

***

### setOperatorApproval?

> `optional` **setOperatorApproval?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `boolean`, `bigint`, `bigint`, `bigint`\] |

#### Returns

readonly \[\]

***

### settleRail?

> `optional` **settleRail?**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

#### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

***

### settleTerminatedRailWithoutValidation?

> `optional` **settleTerminatedRailWithoutValidation?**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

#### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

***

### withdraw?

> `optional` **withdraw?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `bigint`\] |

#### Returns

readonly \[\]

***

### withdrawTo?

> `optional` **withdrawTo?**: (`args`) => readonly \[\]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/payments.ts:49](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/payments.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`\] |

#### Returns

readonly \[\]

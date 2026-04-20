---
title: SynapseError
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/errors/base.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L18)

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Extended by

- [`ZodValidationError`](/reference/filoz/synapse-core/errors/classes/zodvalidationerror/)
- [`ValidationError`](/reference/filoz/synapse-core/errors/classes/validationerror/)
- [`UnsupportedChainError`](/reference/filoz/synapse-core/errors/classes/unsupportedchainerror/)
- [`AllowanceAmountError`](/reference/filoz/synapse-core/errors/classes/allowanceamounterror/)
- [`InsufficientBalanceError`](/reference/filoz/synapse-core/errors/classes/insufficientbalanceerror/)
- [`InsufficientAllowanceError`](/reference/filoz/synapse-core/errors/classes/insufficientallowanceerror/)
- [`DepositAmountError`](/reference/filoz/synapse-core/errors/classes/depositamounterror/)
- [`WithdrawAmountError`](/reference/filoz/synapse-core/errors/classes/withdrawamounterror/)
- [`InsufficientAvailableFundsError`](/reference/filoz/synapse-core/errors/classes/insufficientavailablefundserror/)
- [`LocationHeaderError`](/reference/filoz/synapse-core/errors/classes/locationheadererror/)
- [`CreateDataSetError`](/reference/filoz/synapse-core/errors/classes/createdataseterror/)
- [`WaitForCreateDataSetError`](/reference/filoz/synapse-core/errors/classes/waitforcreatedataseterror/)
- [`WaitForCreateDataSetRejectedError`](/reference/filoz/synapse-core/errors/classes/waitforcreatedatasetrejectederror/)
- [`GetDataSetError`](/reference/filoz/synapse-core/errors/classes/getdataseterror/)
- [`PostPieceError`](/reference/filoz/synapse-core/errors/classes/postpieceerror/)
- [`UploadPieceError`](/reference/filoz/synapse-core/errors/classes/uploadpieceerror/)
- [`FindPieceError`](/reference/filoz/synapse-core/errors/classes/findpieceerror/)
- [`AddPiecesError`](/reference/filoz/synapse-core/errors/classes/addpieceserror/)
- [`WaitForAddPiecesError`](/reference/filoz/synapse-core/errors/classes/waitforaddpieceserror/)
- [`WaitForAddPiecesRejectedError`](/reference/filoz/synapse-core/errors/classes/waitforaddpiecesrejectederror/)
- [`DeletePieceError`](/reference/filoz/synapse-core/errors/classes/deletepieceerror/)
- [`InvalidUploadSizeError`](/reference/filoz/synapse-core/errors/classes/invaliduploadsizeerror/)
- [`DownloadPieceError`](/reference/filoz/synapse-core/errors/classes/downloadpieceerror/)
- [`InvalidPieceCIDError`](/reference/filoz/synapse-core/errors/classes/invalidpiececiderror/)
- [`PullError`](/reference/filoz/synapse-core/errors/classes/pullerror/)
- [`DataSetNotFoundError`](/reference/filoz/synapse-core/errors/classes/datasetnotfounderror/)
- [`AtLeastOnePieceRequiredError`](/reference/filoz/synapse-core/errors/classes/atleastonepiecerequirederror/)
- [`CommitError`](/reference/filoz/synapse-sdk/synapse/classes/commiterror/)
- [`StoreError`](/reference/filoz/synapse-sdk/synapse/classes/storeerror/)

## Constructors

### Constructor

> **new SynapseError**(`message`, `options?`): `SynapseError`

Defined in: [packages/synapse-core/src/errors/base.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `options?` | [`SynapseErrorOptions`](/reference/filoz/synapse-core/errors/interfaces/synapseerroroptions/) |

#### Returns

`SynapseError`

#### Overrides

`Error.constructor`

## Properties

### \[symbol\]

> **\[symbol\]**: `boolean` = `true`

Defined in: [packages/synapse-core/src/errors/base.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L19)

***

### cause?

> `optional` **cause?**: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

Defined in: [packages/synapse-core/src/errors/base.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L22)

#### Overrides

`Error.cause`

***

### details?

> `optional` **details?**: `string`

Defined in: [packages/synapse-core/src/errors/base.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L23)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string` = `'SynapseError'`

Defined in: [packages/synapse-core/src/errors/base.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L21)

#### Overrides

`Error.name`

***

### shortMessage

> **shortMessage**: `string`

Defined in: [packages/synapse-core/src/errors/base.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L24)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@25.5.0/node\_modules/@types/node/globals.d.ts:67

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/.pnpm/@types+node@25.5.0/node\_modules/@types/node/globals.d.ts:51

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | [`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function) |

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

***

### is()

> `static` **is**(`value`): `value is SynapseError`

Defined in: [packages/synapse-core/src/errors/base.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/errors/base.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is SynapseError`

***

### isError()

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

`error is Error`

#### Inherited from

`Error.isError`

***

### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/.pnpm/@types+node@25.5.0/node\_modules/@types/node/globals.d.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `err` | [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

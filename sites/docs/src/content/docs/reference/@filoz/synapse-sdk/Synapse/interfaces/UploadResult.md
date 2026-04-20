---
title: UploadResult
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:517](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L517)

Result of a multi-copy upload operation.

To determine success, check `complete`, it's `true` when all requested
copies were successfully stored and recorded on-chain. Do NOT use
`failedAttempts.length > 0` as a failure signal; failed attempts may have
been resolved by successful retries on other providers.

## Example

```typescript
const result = await synapse.storage.upload(data, { copies: 3 })
if (!result.complete) {
  console.warn(`Got ${result.copies.length}/${result.requestedCopies} copies`)
  for (const attempt of result.failedAttempts) {
    console.warn(`  Provider ${attempt.providerId}: ${attempt.error}`)
  }
}
```

## Properties

### complete

> **complete**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:525](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L525)

True when all requested copies were successfully stored and recorded on-chain

***

### copies

> **copies**: [`CopyResult`](/reference/filoz/synapse-sdk/synapse/interfaces/copyresult/)[]

Defined in: [packages/synapse-sdk/src/types.ts:527](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L527)

Successful copies across providers

***

### failedAttempts

> **failedAttempts**: [`FailedAttempt`](/reference/filoz/synapse-sdk/synapse/interfaces/failedattempt/)[]

Defined in: [packages/synapse-sdk/src/types.ts:533](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L533)

Provider attempts that did not produce a copy. A non-empty array does NOT
indicate upload failure, check `complete` or compare `copies.length`
against `requestedCopies` to determine overall success.

***

### pieceCid

> **pieceCid**: `PieceLink`

Defined in: [packages/synapse-sdk/src/types.ts:519](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L519)

PieceCID of the uploaded data

***

### requestedCopies

> **requestedCopies**: `number`

Defined in: [packages/synapse-sdk/src/types.ts:523](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L523)

Number of copies that were requested

***

### size

> **size**: `number`

Defined in: [packages/synapse-sdk/src/types.ts:521](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L521)

Size of the original data

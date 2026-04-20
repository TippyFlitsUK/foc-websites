---
title: supportsStreamingFetchBody
next: true
prev: true
editUrl: false

---

> **supportsStreamingFetchBody**(): `boolean`

Defined in: [packages/synapse-core/src/utils/streams.ts:141](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/streams.ts#L141)

Detect whether the current environment supports ReadableStream as a fetch
request body. Firefox stringifies the stream to "[object ReadableStream]"
instead of consuming it, and Safari silently ignores the stream body and
the duplex option. This check catches both: a browser that stringifies will
set Content-Type to text/plain (string body), and one that ignores duplex
will fail the duplexAccessed gate. The try/catch handles any future browser
that throws on the Request constructor.

Result is memoized after the first call.

## Returns

`boolean`

## See

 - https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests
 - https://bugzilla.mozilla.org/show_bug.cgi?id=1387483

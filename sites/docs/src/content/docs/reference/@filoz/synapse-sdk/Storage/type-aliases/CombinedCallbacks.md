---
title: CombinedCallbacks
next: true
prev: true
editUrl: false

---

> **CombinedCallbacks** = [`StorageContextCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/) & [`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/)

Defined in: [packages/synapse-sdk/src/storage/manager.ts:97](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L97)

Combined callbacks for StorageManager.upload().

Lifecycle stages:
- Context creation: onProviderSelected, onDataSetResolved  (from StorageContextCallbacks)
- Store (primary):  onProgress, onStored                   (from UploadCallbacks)
- Pull (secondary): onPullProgress, onCopyComplete, onCopyFailed
- Commit:           onPiecesAdded, onPiecesConfirmed

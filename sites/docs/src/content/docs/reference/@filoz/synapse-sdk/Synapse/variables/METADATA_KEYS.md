---
title: METADATA_KEYS
next: true
prev: true
editUrl: false

---

> `const` **METADATA\_KEYS**: `object`

Defined in: [packages/synapse-sdk/src/utils/constants.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/utils/constants.ts#L22)

Common metadata keys

## Type Declaration

### IPFS\_ROOT\_CID

> `readonly` **IPFS\_ROOT\_CID**: `"ipfsRootCID"` = `'ipfsRootCID'`

Key used to indicate a root CID of an IPLD DAG contained within the associated piece.
Advisory only: do not treat as proof that the CID is valid, that IPLD blocks are present, or
that the referenced DAG is fully present or retrievable. Intended as a secondary identifier
provided by the data producer; not interpreted by contracts.

The value for this key should be a valid CID string.

Only valid for *piece* metadata.

### SOURCE

> `readonly` **SOURCE**: `"source"` = `'source'`

Key used to identify the application or dapp that created a data set. Enables namespace
isolation when multiple applications share the same wallet. Datasets with different source
values are treated as distinct and will not be reused across applications.

The value for this key is the application name as a non-empty string.

Only valid for *data set* metadata.

### WITH\_CDN

> `readonly` **WITH\_CDN**: `"withCDN"` = `'withCDN'`

Key used to request that CDN services should be enabled for a data set. The presence of this
key does not strictly guarantee that CDN services will be provided, but the Warm Storage
contract will attempt to enable payment for CDN services if this key is present.

The value for this key is always an empty string.

Only valid for *data set* metadata.

### WITH\_IPFS\_INDEXING

> `readonly` **WITH\_IPFS\_INDEXING**: `"withIPFSIndexing"` = `'withIPFSIndexing'`

Key used to request that a PDP server perform IPFS indexing and announcing to IPNI should be
enabled for all pieces in a data set. The contents of the associated data sets are assumed to
be indexable (i.e. a CAR or a PoDSI container) and the PDP server will be requested to perform
best-effort indexing. The presence of this key does not guarantee that indexing will be
performed or succeed.

The value for this key is always an empty string.

Only valid for *data set* metadata.

---
title: SIZE_CONSTANTS
next: true
prev: true
editUrl: false

---

> `const` **SIZE\_CONSTANTS**: `object`

Defined in: [packages/synapse-core/src/utils/constants.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/constants.ts#L40)

Data size constants

## Type Declaration

### BYTES\_PER\_LEAF

> `readonly` **BYTES\_PER\_LEAF**: `32n` = `32n`

Bytes per leaf in the PDP merkle tree.
The FWSS contract converts leaf counts to bytes via `totalBytes = leafCount * BYTES_PER_LEAF`.

### DEFAULT\_UPLOAD\_BATCH\_SIZE

> `readonly` **DEFAULT\_UPLOAD\_BATCH\_SIZE**: `32` = `32`

Default number of uploads to batch together in a single addPieces transaction
This balances gas efficiency with reasonable transaction sizes

### GiB

> `readonly` **GiB**: `bigint`

Bytes in 1 GiB

### KiB

> `readonly` **KiB**: `1024n` = `1024n`

Bytes in 1 KiB

### MAX\_UPLOAD\_SIZE

> `readonly` **MAX\_UPLOAD\_SIZE**: `1065353216` = `1_065_353_216`

Maximum upload size currently supported by PDP servers.

1 GiB adjusted for fr32 expansion: 1 GiB * (127/128) = 1,065,353,216 bytes

Fr32 encoding adds 2 bits of padding per 254 bits of data, resulting in 128 bytes
of padded data for every 127 bytes of raw data.

Note: While it's technically possible to upload pieces this large as Uint8Array,
streaming via AsyncIterable is strongly recommended for non-trivial sizes.
See SIZE_CONSTANTS.MAX_UPLOAD_SIZE in synapse-sdk for detailed guidance.

### MiB

> `readonly` **MiB**: `bigint`

Bytes in 1 MiB

### MIN\_UPLOAD\_SIZE

> `readonly` **MIN\_UPLOAD\_SIZE**: `127` = `127`

Minimum upload size (127 bytes)
PieceCIDv2 calculation requires at least 127 bytes payload

### PiB

> `readonly` **PiB**: `bigint`

Bytes in 1 PiB

### TiB

> `readonly` **TiB**: `bigint`

Bytes in 1 TiB

---
title: piece
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [download](/reference/filoz/synapse-core/piece/namespaces/download/toc/) | - |
| [downloadAndValidate](/reference/filoz/synapse-core/piece/namespaces/downloadandvalidate/toc/) | - |
| [resolvePieceUrl](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/toc/) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [PieceCID](/reference/filoz/synapse-core/piece/type-aliases/piececid/) | PieceCID - A constrained CID type for Piece Commitments. This is implemented as a Link type which is made concrete by a CID. A PieceCID uses the raw codec (0x55) and the fr32-sha256-trunc254-padbintree multihash function (0x1011) which encodes the base content length (as padding) of the original piece, and the height of the merkle tree used to hash it. |

## Variables

| Variable | Description |
| ------ | ------ |
| [defaultResolvers](/reference/filoz/synapse-core/piece/variables/defaultresolvers/) | The default resolvers to use when resolving the piece URL |

## Functions

| Function | Description |
| ------ | ------ |
| [asPieceCID](/reference/filoz/synapse-core/piece/functions/aspiececid/) | Convert a PieceCID input (string or CID) to a validated CID This is the main function to use when accepting PieceCID inputs |
| [calculate](/reference/filoz/synapse-core/piece/functions/calculate/) | Calculate the PieceCID (Piece Commitment) for a given data blob |
| [calculateFromIterable](/reference/filoz/synapse-core/piece/functions/calculatefromiterable/) | Calculate PieceCID from an async iterable of Uint8Array chunks. |
| [chainResolver](/reference/filoz/synapse-core/piece/functions/chainresolver/) | Resolve the piece URL from the chain |
| [createPieceCIDStream](/reference/filoz/synapse-core/piece/functions/createpiececidstream/) | Create a TransformStream that calculates PieceCID while streaming data through it This allows calculating PieceCID without buffering the entire data in memory |
| [download](/reference/filoz/synapse-core/piece/functions/download/) | Download a piece from a URL. |
| [downloadAndValidate](/reference/filoz/synapse-core/piece/functions/downloadandvalidate/) | Download data from a URL, validate its PieceCID, and return as Uint8Array |
| [filbeamResolver](/reference/filoz/synapse-core/piece/functions/filbeamresolver/) | Resolve the piece URL from the FilBeam CDN |
| [findPieceOnProviders](/reference/filoz/synapse-core/piece/functions/findpieceonproviders/) | Find the piece on the providers |
| [getSize](/reference/filoz/synapse-core/piece/functions/getsize/) | Extract the raw (unpadded) size from a PieceCIDv2 |
| [getSizeFromPieceCID](/reference/filoz/synapse-core/piece/functions/getsizefrompiececid/) | Extract the raw (unpadded) size from a PieceCIDv2 |
| [hexToPieceCID](/reference/filoz/synapse-core/piece/functions/hextopiececid/) | Convert a hex representation of a PieceCID to a PieceCID object |
| [isPieceCID](/reference/filoz/synapse-core/piece/functions/ispiececid/) | Check if a CID is a valid PieceCIDv2 |
| [parse](/reference/filoz/synapse-core/piece/functions/parse/) | - |
| [providersResolver](/reference/filoz/synapse-core/piece/functions/providersresolver/) | Resolve the piece URL from the providers |
| [resolvePieceUrl](/reference/filoz/synapse-core/piece/functions/resolvepieceurl/) | Resolve the piece URL from the available resolvers |

## References

### createPieceUrl

Re-exports [createPieceUrl](/reference/filoz/synapse-core/utils/functions/createpieceurl/)

***

### createPieceUrlPDP

Re-exports [createPieceUrlPDP](/reference/filoz/synapse-core/utils/functions/createpieceurlpdp/)

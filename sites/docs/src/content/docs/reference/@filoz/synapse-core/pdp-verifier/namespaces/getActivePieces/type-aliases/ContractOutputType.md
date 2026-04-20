---
title: ContractOutputType
next: true
prev: true
editUrl: false

---

> **ContractOutputType** = `ContractFunctionReturnType`\<*typeof* [`pdpVerifierAbi`](/reference/filoz/synapse-core/abis/namespaces/generated/variables/pdpverifierabi/), `"pure"` \| `"view"`, `"getActivePieces"`\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-active-pieces.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-active-pieces.ts#L39)

`[piecesData, pieceIds, hasMore]`
- `piecesData`: CID bytes encoded as hex strings
- `pieceIds`: Piece IDs
- `hasMore`: Whether there are more pieces to fetch

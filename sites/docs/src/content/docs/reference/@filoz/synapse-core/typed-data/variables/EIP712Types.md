---
title: EIP712Types
next: true
prev: true
editUrl: false

---

> `const` **EIP712Types**: `object`

Defined in: [packages/synapse-core/src/typed-data/type-definitions.ts:6](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/type-definitions.ts#L6)

## Type Declaration

### AddPieces

> `readonly` **AddPieces**: readonly \[\{ `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `name`: `"nonce"`; `type`: `"uint256"`; \}, \{ `name`: `"pieceData"`; `type`: `"Cid[]"`; \}, \{ `name`: `"pieceMetadata"`; `type`: `"PieceMetadata[]"`; \}\]

### Cid

> `readonly` **Cid**: readonly \[\{ `name`: `"data"`; `type`: `"bytes"`; \}\]

### CreateDataSet

> `readonly` **CreateDataSet**: readonly \[\{ `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `name`: `"payee"`; `type`: `"address"`; \}, \{ `name`: `"metadata"`; `type`: `"MetadataEntry[]"`; \}\]

### DeleteDataSet

> `readonly` **DeleteDataSet**: readonly \[\{ `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}\]

### MetadataEntry

> `readonly` **MetadataEntry**: readonly \[\{ `name`: `"key"`; `type`: `"string"`; \}, \{ `name`: `"value"`; `type`: `"string"`; \}\]

### Permit

> `readonly` **Permit**: readonly \[\{ `name`: `"owner"`; `type`: `"address"`; \}, \{ `name`: `"spender"`; `type`: `"address"`; \}, \{ `name`: `"value"`; `type`: `"uint256"`; \}, \{ `name`: `"nonce"`; `type`: `"uint256"`; \}, \{ `name`: `"deadline"`; `type`: `"uint256"`; \}\]

ERC-2612: Permit Extension for EIP-20 Signed Approvals

#### See

https://eips.ethereum.org/EIPS/eip-2612

### PieceMetadata

> `readonly` **PieceMetadata**: readonly \[\{ `name`: `"pieceIndex"`; `type`: `"uint256"`; \}, \{ `name`: `"metadata"`; `type`: `"MetadataEntry[]"`; \}\]

### SchedulePieceRemovals

> `readonly` **SchedulePieceRemovals**: readonly \[\{ `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `name`: `"pieceIds"`; `type`: `"uint256[]"`; \}\]

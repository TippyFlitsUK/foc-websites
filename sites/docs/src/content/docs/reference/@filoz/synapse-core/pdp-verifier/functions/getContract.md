---
title: getContract
next: true
prev: true
editUrl: false

---

> **getContract**(`options`): `object`

Defined in: [packages/synapse-core/src/pdp-verifier/index.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/index.ts#L60)

Get the PDP Verifier contract

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getcontract/type-aliases/optionstype/) | [getContract.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getcontract/type-aliases/optionstype/) |

## Returns

`object`

[Contract](https://viem.sh/docs/contract/getContract) [getContract.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getcontract/type-aliases/outputtype/)

### abi

> **abi**: `Abi` \| readonly `unknown`[]

### address

> **address**: `` `0x${string}` ``

## Example

```ts
import { getContract } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const contract = getContract({ client })
const dataSetId = 1n
const isLive = await contract.read.dataSetLive([dataSetId])
```

## Throws

Errors [getContract.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getcontract/type-aliases/errortype/)

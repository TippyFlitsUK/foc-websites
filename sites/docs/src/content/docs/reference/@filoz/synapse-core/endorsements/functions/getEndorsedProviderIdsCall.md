---
title: getEndorsedProviderIdsCall
next: true
prev: true
editUrl: false

---

> **getEndorsedProviderIdsCall**(`options`): `object`

Defined in: [packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts:111](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts#L111)

Create a call to the getEndorsedProviderIds function

This function is used to create a call to the getEndorsedProviderIds function for use with the multicall or readContract function.

To get the same output type as the action, use [parseGetEndorsedProviderIds](/reference/filoz/synapse-core/endorsements/functions/parsegetendorsedproviderids/) to transform the contract output.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; \} | [getEndorsedProviderIdsCall.OptionsType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedprovideridscall/type-aliases/optionstype/) |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Endorsements contract address. If not provided, the default is the endorsements contract address for the chain. |

## Returns

`object`

The call to the getEndorsedProviderIdsCall function [getEndorsedProviderIdsCall.OutputType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedprovideridscall/type-aliases/outputtype/)

### abi

> **abi**: readonly \[\{ `inputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}\]; `name`: `"addProviderId"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}\]; `name`: `"containsProviderId"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"getProviderIds"`; `outputs`: readonly \[\{ `internalType`: `"uint256[]"`; `name`: `""`; `type`: `"uint256[]"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}\]; `name`: `"removeProviderId"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}\]; `name`: `"ProviderIdNotFound"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}\]; `name`: `"ProviderIdTooLarge"`; `type`: `"error"`; \}\] = `chain.contracts.endorsements.abi`

### address

> **address**: `` `0x${string}` ``

### args

> **args**: \[\] = `[]`

### functionName

> **functionName**: `"getProviderIds"` = `'getProviderIds'`

## Throws

Errors [getEndorsedProviderIdsCall.ErrorType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedprovideridscall/type-aliases/errortype/)

## Example

```ts
import { getEndorsedProviderIdsCall } from '@filoz/synapse-core/endorsements'
import { createPublicClient, http } from 'viem'
import { multicall } from 'viem/actions'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const results = await multicall(client, {
  contracts: [
    getEndorsedProviderIdsCall({ chain: calibration }),
  ],
})

console.log(results[0])
```

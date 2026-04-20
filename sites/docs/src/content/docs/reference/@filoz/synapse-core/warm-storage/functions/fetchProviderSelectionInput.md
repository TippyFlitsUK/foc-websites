---
title: fetchProviderSelectionInput
next: true
prev: true
editUrl: false

---

> **fetchProviderSelectionInput**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/)\>

Defined in: [packages/synapse-core/src/warm-storage/fetch-provider-selection-input.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/fetch-provider-selection-input.ts#L31)

Fetch all chain data needed for provider selection.

Executes parallel queries for:
  - Approved PDP providers (via spRegistry)
  - Endorsed provider IDs (via endorsements)
  - Client's existing datasets with enrichment (via getPdpDataSets)

Returns a ProviderSelectionInput ready to pass to selectProviders().

For users who need custom caching or only need a subset of this data,
assemble ProviderSelectionInput manually instead.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | Viem public client configured for the target chain |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/fetchproviderselectioninput/type-aliases/optionstype/) | Client address for dataset lookup |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ProviderSelectionInput`](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/)\>

ProviderSelectionInput (caller provides metadata via selectProviders options)

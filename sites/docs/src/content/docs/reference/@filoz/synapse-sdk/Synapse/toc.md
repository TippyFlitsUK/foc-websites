---
title: Synapse
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

**Synapse SDK - Main entry point**

## Example

```ts twoslash
import { Synapse } from '@filoz/synapse-sdk'
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [asChain](/reference/filoz/synapse-sdk/synapse/namespaces/aschain/toc/) | - |
| [getUploadCosts](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/toc/) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [CommitError](/reference/filoz/synapse-sdk/synapse/classes/commiterror/) | All commits failed - data stored but not on-chain. Thrown when on-chain commit fails on every provider after successful store. |
| [StoreError](/reference/filoz/synapse-sdk/synapse/classes/storeerror/) | Primary store failed - no data stored anywhere. Thrown when the initial upload to the primary provider fails. |
| [Synapse](/reference/filoz/synapse-sdk/synapse/classes/synapse/) | Class for interacting with Filecoin storage and other on-chain services |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BaseContextOptions](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/) | Base options shared by all context creation methods |
| [Chain](/reference/filoz/synapse-sdk/synapse/interfaces/chain/) | - |
| [CommitOptions](/reference/filoz/synapse-sdk/synapse/interfaces/commitoptions/) | Options for committing pieces on-chain |
| [CommitResult](/reference/filoz/synapse-sdk/synapse/interfaces/commitresult/) | Result of a commit operation |
| [ContextCreateContextsOptions](/reference/filoz/synapse-sdk/synapse/interfaces/contextcreatecontextsoptions/) | Options for creating multiple storage contexts via createContexts() |
| [CopyResult](/reference/filoz/synapse-sdk/synapse/interfaces/copyresult/) | Result for a single successful copy of data on a provider |
| [CreateContextsOptions](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/) | Options for creating multiple storage contexts via createContexts() |
| [DataSetData](/reference/filoz/synapse-sdk/synapse/interfaces/datasetdata/) | Data set data returned from the API |
| [DataSetInfo](/reference/filoz/synapse-sdk/synapse/interfaces/datasetinfo/) | Data set information returned from Warm Storage contract |
| [DataSetPieceData](/reference/filoz/synapse-sdk/synapse/interfaces/datasetpiecedata/) | Individual data set piece data from API |
| [EnhancedDataSetInfo](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/) | Enhanced data set information with chain details and clear ID separation |
| [FailedAttempt](/reference/filoz/synapse-sdk/synapse/interfaces/failedattempt/) | A provider attempt that did not produce a successful copy. |
| [PDPProvider](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) | - |
| [PieceFetchOptions](/reference/filoz/synapse-sdk/synapse/interfaces/piecefetchoptions/) | - |
| [PieceRecord](/reference/filoz/synapse-sdk/synapse/interfaces/piecerecord/) | Canonical representation of a piece within a data set. |
| [PieceRetriever](/reference/filoz/synapse-sdk/synapse/interfaces/pieceretriever/) | PieceRetriever interface for fetching pieces from various sources Returns standard Web API Response objects for flexibility |
| [PieceStatus](/reference/filoz/synapse-sdk/synapse/interfaces/piecestatus/) | Status information for a piece stored on a provider Note: Proofs are submitted for entire data sets, not individual pieces. The timing information reflects the data set's status. |
| [PrepareOptions](/reference/filoz/synapse-sdk/synapse/interfaces/prepareoptions/) | Options for the prepare() method on StorageManager |
| [PrepareResult](/reference/filoz/synapse-sdk/synapse/interfaces/prepareresult/) | Result of the prepare() method on StorageManager |
| [ProviderSelectionResult](/reference/filoz/synapse-sdk/synapse/interfaces/providerselectionresult/) | Result of provider selection and data set resolution |
| [PullOptions](/reference/filoz/synapse-sdk/synapse/interfaces/pulloptions/) | Options for pulling pieces from a source provider |
| [PullResult](/reference/filoz/synapse-sdk/synapse/interfaces/pullresult/) | Result of a pull operation |
| [SettlementResult](/reference/filoz/synapse-sdk/synapse/interfaces/settlementresult/) | Settlement result from settling a payment rail |
| [StorageContextCallbacks](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/) | Callbacks for storage context creation process |
| [StorageContextCreateOptions](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcreateoptions/) | Options for creating or selecting a single storage context via createContext() |
| [StorageErrorOptions](/reference/filoz/synapse-sdk/synapse/interfaces/storageerroroptions/) | - |
| [StorageInfo](/reference/filoz/synapse-sdk/synapse/interfaces/storageinfo/) | Comprehensive storage service information |
| [StorageOptions](/reference/filoz/synapse-sdk/synapse/interfaces/storageoptions/) | Storage service options |
| [StorageServiceOptions](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/) | Options for creating or selecting a single storage context via createContext() |
| [StoreOptions](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/) | Options for storing data on a provider without on-chain commit |
| [StoreResult](/reference/filoz/synapse-sdk/synapse/interfaces/storeresult/) | Result of a store operation |
| [SynapseFromClientOptions](/reference/filoz/synapse-sdk/synapse/interfaces/synapsefromclientoptions/) | - |
| [SynapseOptions](/reference/filoz/synapse-sdk/synapse/interfaces/synapseoptions/) | Options for initializing the Synapse instance |
| [UploadCallbacks](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/) | - |
| [UploadOptions](/reference/filoz/synapse-sdk/synapse/interfaces/uploadoptions/) | Options for uploading individual pieces to an existing storage context |
| [UploadResult](/reference/filoz/synapse-sdk/synapse/interfaces/uploadresult/) | Result of a multi-copy upload operation. |
| [UploadTask](/reference/filoz/synapse-sdk/synapse/interfaces/uploadtask/) | Upload task tracking |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [CopyRole](/reference/filoz/synapse-sdk/synapse/type-aliases/copyrole/) | Role of a copy in a multi-provider upload. |
| [DataSetId](/reference/filoz/synapse-sdk/synapse/type-aliases/datasetid/) | - |
| [DownloadOptions](/reference/filoz/synapse-sdk/synapse/type-aliases/downloadoptions/) | Download options Currently empty, reserved for future options |
| [FilecoinNetworkType](/reference/filoz/synapse-sdk/synapse/type-aliases/filecoinnetworktype/) | Supported Filecoin network types |
| [FundOptions](/reference/filoz/synapse-sdk/synapse/type-aliases/fundoptions/) | Options for the fund() method on PaymentsService. Re-exported from synapse-core. |
| [getUploadCosts](/reference/filoz/synapse-sdk/synapse/type-aliases/getuploadcosts/) | - |
| [GetUploadCostsOptions](/reference/filoz/synapse-sdk/synapse/type-aliases/getuploadcostsoptions/) | Alias for the upload costs options type |
| [MetadataEntry](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataentry/) | - |
| [MetadataObject](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/) | - |
| [PieceCID](/reference/filoz/synapse-sdk/synapse/type-aliases/piececid/) | - |
| [PrivateKey](/reference/filoz/synapse-sdk/synapse/type-aliases/privatekey/) | - |
| [PullSource](/reference/filoz/synapse-sdk/synapse/type-aliases/pullsource/) | Source for pulling pieces from another provider. Either a base URL string or a function that returns a piece URL for a given PieceCID. |
| [PullStatus](/reference/filoz/synapse-sdk/synapse/type-aliases/pullstatus/) | - |
| [RailInfo](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/) | - |
| [ServiceProvider](/reference/filoz/synapse-sdk/synapse/type-aliases/serviceprovider/) | - |
| [TokenAmount](/reference/filoz/synapse-sdk/synapse/type-aliases/tokenamount/) | - |
| [TokenIdentifier](/reference/filoz/synapse-sdk/synapse/type-aliases/tokenidentifier/) | Token identifier for balance queries |
| [UploadCosts](/reference/filoz/synapse-sdk/synapse/type-aliases/uploadcosts/) | Alias for the upload costs return type |

## Variables

| Variable | Description |
| ------ | ------ |
| [calibration](/reference/filoz/synapse-sdk/synapse/variables/calibration/) | - |
| [DEFAULT\_CHAIN](/reference/filoz/synapse-sdk/synapse/variables/default_chain/) | - |
| [devnet](/reference/filoz/synapse-sdk/synapse/variables/devnet/) | - |
| [mainnet](/reference/filoz/synapse-sdk/synapse/variables/mainnet/) | - |
| [METADATA\_KEYS](/reference/filoz/synapse-sdk/synapse/variables/metadata_keys/) | Common metadata keys |
| [SIZE\_CONSTANTS](/reference/filoz/synapse-sdk/synapse/variables/size_constants/) | - |
| [TIME\_CONSTANTS](/reference/filoz/synapse-sdk/synapse/variables/time_constants/) | - |
| [TOKENS](/reference/filoz/synapse-sdk/synapse/variables/tokens/) | Token identifiers |

## Functions

| Function | Description |
| ------ | ------ |
| [asChain](/reference/filoz/synapse-sdk/synapse/functions/aschain/) | - |
| [asClient](/reference/filoz/synapse-sdk/synapse/functions/asclient/) | - |
| [formatUnits](/reference/filoz/synapse-sdk/synapse/functions/formatunits/) | - |
| [getChain](/reference/filoz/synapse-sdk/synapse/functions/getchain/) | - |
| [parseUnits](/reference/filoz/synapse-sdk/synapse/functions/parseunits/) | - |

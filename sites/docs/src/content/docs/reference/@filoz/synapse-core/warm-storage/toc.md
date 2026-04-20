---
title: warm-storage
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

Warm Storage Contract Operations

## Example

```ts
import * as WarmStorage from '@filoz/synapse-core/warm-storage'
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [addApprovedProvider](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovider/toc/) | - |
| [addApprovedProviderCall](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidercall/toc/) | - |
| [addApprovedProviderSync](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/toc/) | - |
| [calculateAdditionalLockupRequired](/reference/filoz/synapse-core/warm-storage/namespaces/calculateadditionallockuprequired/toc/) | - |
| [calculateBufferAmount](/reference/filoz/synapse-core/warm-storage/namespaces/calculatebufferamount/toc/) | - |
| [calculateDepositNeeded](/reference/filoz/synapse-core/warm-storage/namespaces/calculatedepositneeded/toc/) | - |
| [calculateEffectiveRate](/reference/filoz/synapse-core/warm-storage/namespaces/calculateeffectiverate/toc/) | - |
| [calculateRunwayAmount](/reference/filoz/synapse-core/warm-storage/namespaces/calculaterunwayamount/toc/) | - |
| [fetchProviderSelectionInput](/reference/filoz/synapse-core/warm-storage/namespaces/fetchproviderselectioninput/toc/) | - |
| [getAccountTotalStorageSize](/reference/filoz/synapse-core/warm-storage/namespaces/getaccounttotalstoragesize/toc/) | - |
| [getAllDataSetMetadata](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadata/toc/) | - |
| [getAllDataSetMetadataCall](/reference/filoz/synapse-core/warm-storage/namespaces/getalldatasetmetadatacall/toc/) | - |
| [getAllPieceMetadata](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadata/toc/) | - |
| [getAllPieceMetadataCall](/reference/filoz/synapse-core/warm-storage/namespaces/getallpiecemetadatacall/toc/) | - |
| [getApprovedProviderIds](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/toc/) | - |
| [getApprovedProviderIdsCall](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedprovideridscall/toc/) | - |
| [getClientDataSetIds](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/toc/) | - |
| [getClientDataSetIdsCall](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetidscall/toc/) | - |
| [getClientDataSets](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/toc/) | - |
| [getClientDataSetsCall](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetscall/toc/) | - |
| [getClientDataSetsLength](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslength/toc/) | - |
| [getClientDataSetsLengthCall](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetslengthcall/toc/) | - |
| [getDataSet](/reference/filoz/synapse-core/warm-storage/namespaces/getdataset/toc/) | - |
| [getDataSetCall](/reference/filoz/synapse-core/warm-storage/namespaces/getdatasetcall/toc/) | - |
| [getPdpDataSet](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdataset/toc/) | - |
| [getPdpDataSets](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/toc/) | - |
| [getServicePrice](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/toc/) | - |
| [getServicePriceCall](/reference/filoz/synapse-core/warm-storage/namespaces/getservicepricecall/toc/) | - |
| [getUploadCosts](/reference/filoz/synapse-core/warm-storage/namespaces/getuploadcosts/toc/) | - |
| [readAddresses](/reference/filoz/synapse-core/warm-storage/namespaces/readaddresses/toc/) | - |
| [removeApprovedProvider](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovider/toc/) | - |
| [removeApprovedProviderCall](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidercall/toc/) | - |
| [removeApprovedProviderSync](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/toc/) | - |
| [terminateService](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservice/toc/) | - |
| [terminateServiceCall](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicecall/toc/) | - |
| [terminateServiceSync](/reference/filoz/synapse-core/warm-storage/namespaces/terminateservicesync/toc/) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [PdpDataSet](/reference/filoz/synapse-core/warm-storage/interfaces/pdpdataset/) | Data set information returned from Warm Storage contract |
| [Piece](/reference/filoz/synapse-core/warm-storage/interfaces/piece/) | - |
| [PieceWithMetadata](/reference/filoz/synapse-core/warm-storage/interfaces/piecewithmetadata/) | - |
| [ProviderSelectionInput](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectioninput/) | Pre-fetched data for provider selection. |
| [ProviderSelectionOptions](/reference/filoz/synapse-core/warm-storage/interfaces/providerselectionoptions/) | Options for selectProviders(). Combines pre-fetched chain data with selection parameters in a single argument. |
| [ResolvedLocation](/reference/filoz/synapse-core/warm-storage/interfaces/resolvedlocation/) | A resolved provider+dataset pair ready for upload. |
| [SelectionDataSet](/reference/filoz/synapse-core/warm-storage/interfaces/selectiondataset/) | Dataset with piece count, for provider selection. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DataSetInfo](/reference/filoz/synapse-core/warm-storage/type-aliases/datasetinfo/) | Data set information returned from Warm Storage contract |
| [PdpDataSetInfo](/reference/filoz/synapse-core/warm-storage/type-aliases/pdpdatasetinfo/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [addApprovedProvider](/reference/filoz/synapse-core/warm-storage/functions/addapprovedprovider/) | Add an approved provider for the client |
| [addApprovedProviderCall](/reference/filoz/synapse-core/warm-storage/functions/addapprovedprovidercall/) | Create a call to the addApprovedProvider function |
| [addApprovedProviderSync](/reference/filoz/synapse-core/warm-storage/functions/addapprovedprovidersync/) | Add an approved provider for the client and wait for confirmation |
| [calculateAdditionalLockupRequired](/reference/filoz/synapse-core/warm-storage/functions/calculateadditionallockuprequired/) | Compute how much additional lockup this upload requires. |
| [calculateBufferAmount](/reference/filoz/synapse-core/warm-storage/functions/calculatebufferamount/) | Calculate safety margin for epoch drift between balance check and tx execution. |
| [calculateDepositNeeded](/reference/filoz/synapse-core/warm-storage/functions/calculatedepositneeded/) | Orchestrate lockup + runway + debt + buffer to compute total deposit needed. |
| [calculateEffectiveRate](/reference/filoz/synapse-core/warm-storage/functions/calculateeffectiverate/) | Mirror the contract's `_calculateStorageRate` with floor pricing. |
| [calculateRunwayAmount](/reference/filoz/synapse-core/warm-storage/functions/calculaterunwayamount/) | Calculate extra funds to ensure the account stays funded beyond the lockup period. |
| [extractAddApprovedProviderEvent](/reference/filoz/synapse-core/warm-storage/functions/extractaddapprovedproviderevent/) | Extracts the ProviderApproved event from transaction logs |
| [extractRemoveApprovedProviderEvent](/reference/filoz/synapse-core/warm-storage/functions/extractremoveapprovedproviderevent/) | Extracts the ProviderUnapproved event from transaction logs |
| [extractTerminateServiceEvent](/reference/filoz/synapse-core/warm-storage/functions/extractterminateserviceevent/) | Extracts the ServiceTerminated event from transaction logs |
| [fetchProviderSelectionInput](/reference/filoz/synapse-core/warm-storage/functions/fetchproviderselectioninput/) | Fetch all chain data needed for provider selection. |
| [findMatchingDataSets](/reference/filoz/synapse-core/warm-storage/functions/findmatchingdatasets/) | Find datasets matching the given metadata, sorted by preference. |
| [getAccountTotalStorageSize](/reference/filoz/synapse-core/warm-storage/functions/getaccounttotalstoragesize/) | Get the total storage size across all live datasets for an account. |
| [getAllDataSetMetadata](/reference/filoz/synapse-core/warm-storage/functions/getalldatasetmetadata/) | Get all metadata for a data set formatted as a MetadataObject |
| [getAllDataSetMetadataCall](/reference/filoz/synapse-core/warm-storage/functions/getalldatasetmetadatacall/) | Create a call to the getAllDataSetMetadata function |
| [getAllPieceMetadata](/reference/filoz/synapse-core/warm-storage/functions/getallpiecemetadata/) | Get all metadata for a piece formatted as a MetadataObject |
| [getAllPieceMetadataCall](/reference/filoz/synapse-core/warm-storage/functions/getallpiecemetadatacall/) | Create a call to the getAllPieceMetadata function |
| [getApprovedProviderIds](/reference/filoz/synapse-core/warm-storage/functions/getapprovedproviderids/) | Get all approved provider IDs with optional pagination |
| [getApprovedProviderIdsCall](/reference/filoz/synapse-core/warm-storage/functions/getapprovedprovideridscall/) | Create a call to the [getApprovedProviderIds](/reference/filoz/synapse-core/warm-storage/functions/getapprovedproviderids/) function for use with the Viem multicall, readContract, or simulateContract functions. |
| [getClientDataSetIds](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetids/) | Get client data set IDs with optional pagination |
| [getClientDataSetIdsCall](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetidscall/) | Create a call to the [getClientDataSetIds](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetids/) function for use with the Viem multicall, readContract, or simulateContract functions. |
| [getClientDataSets](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasets/) | Get client data sets |
| [getClientDataSetsCall](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetscall/) | Create a call to the [getClientDataSets](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasets/) function for use with the Viem multicall, readContract, or simulateContract functions. |
| [getClientDataSetsLength](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetslength/) | Get total count of client data sets |
| [getClientDataSetsLengthCall](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetslengthcall/) | Create a call to the [getClientDataSetsLength](/reference/filoz/synapse-core/warm-storage/functions/getclientdatasetslength/) function for use with the Viem multicall, readContract, or simulateContract functions. |
| [getDataSet](/reference/filoz/synapse-core/warm-storage/functions/getdataset/) | Get a data set by ID |
| [getDataSetCall](/reference/filoz/synapse-core/warm-storage/functions/getdatasetcall/) | Create a call to the [getDataSet](/reference/filoz/synapse-core/warm-storage/functions/getdataset/) function for use with the multicall or readContract function. |
| [getPdpDataSet](/reference/filoz/synapse-core/warm-storage/functions/getpdpdataset/) | Get a PDP data set by ID |
| [getPdpDataSets](/reference/filoz/synapse-core/warm-storage/functions/getpdpdatasets/) | Get PDP data sets |
| [getServicePrice](/reference/filoz/synapse-core/warm-storage/functions/getserviceprice/) | Get the service price for the warm storage |
| [getServicePriceCall](/reference/filoz/synapse-core/warm-storage/functions/getservicepricecall/) | Create a call to the getServicePrice function |
| [getUploadCosts](/reference/filoz/synapse-core/warm-storage/functions/getuploadcosts/) | Read-only function that computes upload costs, deposit needed, and approval state. |
| [metadataMatches](/reference/filoz/synapse-core/warm-storage/functions/metadatamatches/) | Check if a dataset's metadata exactly matches the requested metadata. |
| [parseAllDataSetMetadata](/reference/filoz/synapse-core/warm-storage/functions/parsealldatasetmetadata/) | Parse the contract output into a MetadataObject |
| [parseAllPieceMetadata](/reference/filoz/synapse-core/warm-storage/functions/parseallpiecemetadata/) | Parse the contract output into a MetadataObject |
| [readAddresses](/reference/filoz/synapse-core/warm-storage/functions/readaddresses/) | Read FOC addresses from the Warm Storage contract |
| [readPdpDataSetInfo](/reference/filoz/synapse-core/warm-storage/functions/readpdpdatasetinfo/) | Read the PDP data set info. |
| [removeApprovedProvider](/reference/filoz/synapse-core/warm-storage/functions/removeapprovedprovider/) | Remove an approved provider for the client |
| [removeApprovedProviderCall](/reference/filoz/synapse-core/warm-storage/functions/removeapprovedprovidercall/) | Create a call to the removeApprovedProvider function |
| [removeApprovedProviderSync](/reference/filoz/synapse-core/warm-storage/functions/removeapprovedprovidersync/) | Remove an approved provider for the client and wait for confirmation |
| [selectProviders](/reference/filoz/synapse-core/warm-storage/functions/selectproviders/) | Select providers for storage from an eligible pool. |
| [terminateService](/reference/filoz/synapse-core/warm-storage/functions/terminateservice/) | Terminate a service (data set) |
| [terminateServiceCall](/reference/filoz/synapse-core/warm-storage/functions/terminateservicecall/) | Create a call to the [terminateService](/reference/filoz/synapse-core/warm-storage/functions/terminateservice/) function |
| [terminateServiceSync](/reference/filoz/synapse-core/warm-storage/functions/terminateservicesync/) | Terminate a service (data set) and wait for confirmation |

## References

### datasetMetadataObjectToEntry

Re-exports [datasetMetadataObjectToEntry](/reference/filoz/synapse-core/utils/functions/datasetmetadataobjecttoentry/)

***

### METADATA\_LIMITS

Re-exports [METADATA_LIMITS](/reference/filoz/synapse-core/utils/variables/metadata_limits/)

***

### MetadataArray

Re-exports [MetadataArray](/reference/filoz/synapse-core/utils/type-aliases/metadataarray/)

***

### metadataArrayToObject

Re-exports [metadataArrayToObject](/reference/filoz/synapse-core/utils/functions/metadataarraytoobject/)

***

### MetadataDataSetInternal

Re-exports [MetadataDataSetInternal](/reference/filoz/synapse-core/utils/interfaces/metadatadatasetinternal/)

***

### MetadataEntry

Re-exports [MetadataEntry](/reference/filoz/synapse-core/utils/type-aliases/metadataentry/)

***

### MetadataObject

Re-exports [MetadataObject](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/)

***

### MetadataPieceInternal

Re-exports [MetadataPieceInternal](/reference/filoz/synapse-core/utils/interfaces/metadatapieceinternal/)

***

### pieceMetadataObjectToEntry

Re-exports [pieceMetadataObjectToEntry](/reference/filoz/synapse-core/utils/functions/piecemetadataobjecttoentry/)

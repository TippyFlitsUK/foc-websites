---
title: pdp-verifier
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [dataSetLive](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlive/toc/) | - |
| [dataSetLiveCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlivecall/toc/) | - |
| [getActivePieceCount](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececount/toc/) | - |
| [getActivePieceCountCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiececountcall/toc/) | - |
| [getActivePieces](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/toc/) | - |
| [getActivePiecesCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepiecescall/toc/) | - |
| [getContract](/reference/filoz/synapse-core/pdp-verifier/namespaces/getcontract/toc/) | - |
| [getDataSetLeafCount](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcount/toc/) | - |
| [getDataSetLeafCountCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcountcall/toc/) | - |
| [getDataSetListener](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistener/toc/) | - |
| [getDataSetListenerCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistenercall/toc/) | - |
| [getDataSetSizes](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/toc/) | - |
| [getDataSetStorageProvider](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovider/toc/) | - |
| [getDataSetStorageProviderCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetstorageprovidercall/toc/) | - |
| [getNextChallengeEpoch](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepoch/toc/) | - |
| [getNextChallengeEpochCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextchallengeepochcall/toc/) | - |
| [getNextPieceId](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceid/toc/) | - |
| [getNextPieceIdCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getnextpieceidcall/toc/) | - |
| [getPieces](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieces/toc/) | - |
| [getPiecesWithMetadata](/reference/filoz/synapse-core/pdp-verifier/namespaces/getpieceswithmetadata/toc/) | - |
| [getScheduledRemovals](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovals/toc/) | - |
| [getScheduledRemovalsCall](/reference/filoz/synapse-core/pdp-verifier/namespaces/getscheduledremovalscall/toc/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [dataSetLive](/reference/filoz/synapse-core/pdp-verifier/functions/datasetlive/) | Check if a data set is live |
| [dataSetLiveCall](/reference/filoz/synapse-core/pdp-verifier/functions/datasetlivecall/) | Create a call to the dataSetLive function |
| [getActivePieceCount](/reference/filoz/synapse-core/pdp-verifier/functions/getactivepiececount/) | Get the active piece count for a data set (non-zero leaf count) |
| [getActivePieceCountCall](/reference/filoz/synapse-core/pdp-verifier/functions/getactivepiececountcall/) | Create a call to the getActivePieceCount function |
| [getActivePieces](/reference/filoz/synapse-core/pdp-verifier/functions/getactivepieces/) | Get active pieces for a data set with pagination does NOT account for removals |
| [getActivePiecesCall](/reference/filoz/synapse-core/pdp-verifier/functions/getactivepiecescall/) | Create a call to the [getActivePieces](/reference/filoz/synapse-core/pdp-verifier/functions/getactivepieces/) function for use with the multicall or readContract function. |
| [getContract](/reference/filoz/synapse-core/pdp-verifier/functions/getcontract/) | Get the PDP Verifier contract |
| [getDataSetLeafCount](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetleafcount/) | Get the leaf count for a data set |
| [getDataSetLeafCountCall](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetleafcountcall/) | Create a call to the getDataSetLeafCount function |
| [getDataSetListener](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetlistener/) | Get the data set listener contract address (record keeper) |
| [getDataSetListenerCall](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetlistenercall/) | Create a call to the getDataSetListener function |
| [getDataSetSizes](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetsizes/) | Get the sizes of one or more data sets in bytes via a single multicall. |
| [getDataSetStorageProvider](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetstorageprovider/) | Get the storage provider addresses for a data set |
| [getDataSetStorageProviderCall](/reference/filoz/synapse-core/pdp-verifier/functions/getdatasetstorageprovidercall/) | Create a call to the getDataSetStorageProvider function |
| [getNextChallengeEpoch](/reference/filoz/synapse-core/pdp-verifier/functions/getnextchallengeepoch/) | Get next challenge epoch |
| [getNextChallengeEpochCall](/reference/filoz/synapse-core/pdp-verifier/functions/getnextchallengeepochcall/) | Create a call to the [getNextChallengeEpoch](/reference/filoz/synapse-core/pdp-verifier/functions/getnextchallengeepoch/) function for use with the multicall or readContract function. |
| [getNextPieceId](/reference/filoz/synapse-core/pdp-verifier/functions/getnextpieceid/) | Get the next piece ID for a data set |
| [getNextPieceIdCall](/reference/filoz/synapse-core/pdp-verifier/functions/getnextpieceidcall/) | Create a call to the getNextPieceId function |
| [getPieces](/reference/filoz/synapse-core/pdp-verifier/functions/getpieces/) | Get pieces for a data set with pagination |
| [getPiecesWithMetadata](/reference/filoz/synapse-core/pdp-verifier/functions/getpieceswithmetadata/) | Get pieces with metadata for a data set with pagination |
| [getScheduledRemovals](/reference/filoz/synapse-core/pdp-verifier/functions/getscheduledremovals/) | Get the scheduled removals for a data set (deduped) |
| [getScheduledRemovalsCall](/reference/filoz/synapse-core/pdp-verifier/functions/getscheduledremovalscall/) | Create a call to the getScheduledRemovals function |
| [parseActivePieces](/reference/filoz/synapse-core/pdp-verifier/functions/parseactivepieces/) | Parse the contract output into a [getActivePieces.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getactivepieces/type-aliases/outputtype/). |

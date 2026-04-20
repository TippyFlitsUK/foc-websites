---
title: pdp
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MetadataCapture](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/metadatacapture/) | - |
| [PDPMockOptions](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) | - |
| [PieceMetadataCapture](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/piecemetadatacapture/) | - |
| [PullRequestCapture](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pullrequestcapture/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [addPiecesWithMetadataCapture](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/addpieceswithmetadatacapture/) | Creates a handler that captures piece metadata from addPieces requests |
| [createAndAddPiecesHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/createandaddpieceshandler/) | - |
| [createDataSetWithMetadataCapture](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/createdatasetwithmetadatacapture/) | Creates a handler that captures metadata from createDataSet requests |
| [createPullResponse](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/createpullresponse/) | Helper to create a complete PullResponse |
| [dataSetCreationStatusHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/datasetcreationstatushandler/) | Creates a handler for data set creation status check |
| [decodeMetadataFromCreateDataSetExtraData](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/decodemetadatafromcreatedatasetextradata/) | Helper to decode metadata from extraData |
| [decodePieceMetadataFromExtraData](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/decodepiecemetadatafromextradata/) | Helper to decode piece metadata from extraData Format: (uint256 nonce, string[][] keys, string[][] values, bytes signature) |
| [finalizePieceUploadHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/finalizepieceuploadhandler/) | Creates a handler for finalizing a streaming upload POST /pdp/piece/uploads/:uuid - finalize with PieceCID |
| [findAnyPieceHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/findanypiecehandler/) | - |
| [findPieceHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/findpiecehandler/) | Creates a handler for finding pieces |
| [pieceAdditionStatusHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pieceadditionstatushandler/) | Creates a handler for piece addition status check |
| [postPieceHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/postpiecehandler/) | Creates a handler that supports only one pieceCid Returns a UUID for 201, or a CID for 200 |
| [postPieceUploadsHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/postpieceuploadshandler/) | Creates a handler for the streaming upload protocol (commp-last) POST /pdp/piece/uploads - creates upload session, returns UUID Note: This endpoint doesn't require a request body |
| [pullPiecesErrorHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pullpieceserrorhandler/) | Creates a handler that returns an error response |
| [pullPiecesHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pullpieceshandler/) | Creates a handler for the pull pieces endpoint that returns a fixed response |
| [pullPiecesPollingHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pullpiecespollinghandler/) | Creates a handler that simulates polling, returns pending status N times, then returns the final response |
| [pullPiecesProgressionHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pullpiecesprogressionhandler/) | Creates a handler that simulates a progression through statuses |
| [pullPiecesWithCaptureHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/pullpieceswithcapturehandler/) | Creates a handler that captures the request body and returns a response |
| [streamingUploadHandlers](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/streaminguploadhandlers/) | Creates handlers for the complete streaming upload flow (all piece CIDs accepted) Returns array of handlers for: POST /pdp/piece/uploads, PUT /pdp/piece/uploads/:uuid, POST /pdp/piece/uploads/:uuid |
| [uploadPieceHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/uploadpiecehandler/) | - |
| [uploadPieceStreamingHandler](/reference/filoz/synapse-core/mocks/namespaces/pdp/functions/uploadpiecestreaminghandler/) | Creates a handler for uploading piece data via streaming protocol PUT /pdp/piece/uploads/:uuid - streams piece data |

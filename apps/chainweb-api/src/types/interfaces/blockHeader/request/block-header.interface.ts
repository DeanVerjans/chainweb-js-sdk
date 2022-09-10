import { Equal, If, ResponseFormat, SubSet } from 'chainweb-sdk-core';
import { ChainRequest, RequestBody, RequestQueryString } from '../../chain-web-request.interface';

export interface BlockHeaderRequestParams extends ChainRequest {
  blockHash: string;
}

export interface BlockHeaderArgs<TRequest extends ChainRequest = ChainRequest> {
  params: SubSet<TRequest, BlockHeaderRequestParams>;
  query?: If<Equal<TRequest, ChainRequest>, RequestQueryString>;
  responseFormat?: If<
    Equal<TRequest, BlockHeaderRequestParams>,
    ResponseFormat,
    ResponseFormat.JSON | ResponseFormat.BASE64_URL
  >;
}

export interface BlockHeaderBranchesArgs {
  params: ChainRequest;
  query?: RequestQueryString;
  body: RequestBody;
  responseFormat?: ResponseFormat.JSON | ResponseFormat.BASE64_URL;
}

import { ChainRequest, RequestBody, RequestQueryString } from '../../chain-web-request.interface';

export interface BlockHashArgs<TRequest extends ChainRequest = ChainRequest> {
  params: ChainRequest;
  query?: RequestQueryString;
}

export interface BlockHashBranchesArgs {
  params: ChainRequest;
  query?: RequestQueryString;
  body: RequestBody;
}

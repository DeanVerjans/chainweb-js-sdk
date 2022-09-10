import { HttpProvider } from 'chainweb-sdk-core';
import {
  BlockHeader,
  BlockHeaderArgs,
  BlockHeaderBranchesArgs,
  BlockHeaderList,
  BlockHeaderRequestParams,
  ChainRequest,
  Endpoint as RequestEndpoint,
} from '../types';
import { Endpoint } from './endpoint';

export class BlockHeaderEndpoint extends Endpoint {
  constructor(_httpProvider: HttpProvider) {
    super(_httpProvider);
  }

  public async getBlockHeaders(args: BlockHeaderArgs): Promise<BlockHeaderList> {
    const { query, params, responseFormat } = args;

    const url: string = this.provider.urlBuilder
      .endpoint(RequestEndpoint.GET_BLOCK_HEADERS)
      .chainId(params.chainId)
      .build();

    return this.provider.get<BlockHeaderArgs, BlockHeaderList>(url, {
      query,
      responseFormat,
    });
  }

  public async getBlockHeaderByHash(
    args: BlockHeaderArgs<BlockHeaderRequestParams>
  ): Promise<BlockHeader> {
    const { query, params, responseFormat } = args;

    const url: string = this.provider.urlBuilder
      .endpoint(RequestEndpoint.GET_BLOCK_HEADER_BY_BLOCK_HASH, params)
      .chainId(params.chainId)
      .build();

    return this.provider.get<BlockHeaderArgs<BlockHeaderRequestParams>, BlockHeader>(url, {
      query,
      responseFormat,
    });
  }

  public async getBlockHeaderBranches<TRequest extends ChainRequest = BlockHeaderRequestParams>(
    args: BlockHeaderBranchesArgs
  ): Promise<BlockHeaderList> {
    const { body = { upper: [], lower: [] }, params, responseFormat, query } = args;

    const url: string = this.provider.urlBuilder
      .endpoint(RequestEndpoint.GET_BLOCK_HEADER_BRANCHES)
      .chainId(params.chainId)
      .build();

    return this.provider.post<BlockHeaderBranchesArgs, BlockHeaderList>(url, {
      query,
      body,
      responseFormat,
    });
  }
}

import { HttpProvider } from 'chainweb-sdk-core';
import {
  BlockHashArgs,
  BlockHashList,
  BlockHeaderBranchesArgs,
  Endpoint as RequestEndpoint,
} from '../types';
import { Endpoint } from './endpoint';

export class BlockHashEndpoint extends Endpoint {
  constructor(_httpProvider: HttpProvider) {
    super(_httpProvider);
  }

  public async getBlockHashes(args: BlockHashArgs): Promise<BlockHashList> {
    const { query, params } = args;

    const url: string = this.provider.urlBuilder
      .endpoint(RequestEndpoint.GET_BLOCK_HASHES)
      .chainId(params.chainId)
      .build();

    return this.provider.get<BlockHashArgs, BlockHashList>(url, {
      query,
    });
  }

  public async getBlockHashBranches(args: BlockHeaderBranchesArgs): Promise<BlockHashList> {
    const { body = { upper: [], lower: [] }, params, query } = args;

    const url: string = this.provider.urlBuilder
      .endpoint(RequestEndpoint.GET_BLOCK_HASH_BRANCHES)
      .chainId(params.chainId)
      .build();

    return this.provider.post<BlockHeaderBranchesArgs, BlockHashList>(url, {
      query,
      body,
    });
  }
}

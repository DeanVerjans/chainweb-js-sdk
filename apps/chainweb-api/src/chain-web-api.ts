import { ChainOptions, HttpProvider } from 'chainweb-sdk-core';
import { BlockHeaderEndpoint } from './endpoints';
import { BlockHashEndpoint } from './endpoints/block-hash.endpoint';

export class ChainWebApi {
  private readonly _httpProvider: HttpProvider;

  // Api Endpoints
  private readonly _blockHeader: BlockHeaderEndpoint;
  private readonly _blockHash: BlockHashEndpoint;

  constructor(options: ChainOptions) {
    this._httpProvider = new HttpProvider(options);

    this._blockHeader = new BlockHeaderEndpoint(this._httpProvider);
    this._blockHash = new BlockHashEndpoint(this._httpProvider);
  }

  public get blockHeader() {
    return this._blockHeader;
  }

  public get blockHash() {
    return this._blockHash;
  }
}

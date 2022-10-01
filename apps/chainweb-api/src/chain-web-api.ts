import { ChainOptions, HttpProvider } from 'chainweb-sdk-core';
import { BlockHeaderEndpoint } from './endpoints';

export class ChainWebApi {
  private readonly _httpProvider: HttpProvider;

  // Api Endpoints
  private readonly _blockHeader: BlockHeaderEndpoint;

  constructor(options: ChainOptions) {
    this._httpProvider = new HttpProvider(options);

    this._blockHeader = new BlockHeaderEndpoint(this._httpProvider);
  }

  public get blockHeader() {
    return this._blockHeader;
  }
}

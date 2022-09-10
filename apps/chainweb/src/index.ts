import { ChainWebApi } from 'chainweb-sdk-api';
import { ChainOptions } from 'chainweb-sdk-core';

export class ChainWeb {
  private readonly _api: ChainWebApi;

  constructor(options?: ChainOptions) {
    this._api = new ChainWebApi(options);
  }

  get api() {
    return this._api;
  }
}

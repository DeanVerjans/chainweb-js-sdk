import { ChainOptions, HttpProvider } from 'chainweb-sdk-core';

export class ChainWebApi {
  private readonly _httpProvider: HttpProvider;

  constructor(options: ChainOptions) {
    this._httpProvider = new HttpProvider(options);
  }
}

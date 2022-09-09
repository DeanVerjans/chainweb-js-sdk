import { ChainOptions, Provider, HttpProvider } from 'chainweb-sdk-core';

export class ChainWeb {
  private readonly _provider: Provider;

  constructor(options?: ChainOptions) {
    this._provider = new HttpProvider(options);
  }
}

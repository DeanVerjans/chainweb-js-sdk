import { HttpProvider } from 'chainweb-sdk-core';

export abstract class Endpoint {
  protected constructor(private readonly _httpProvider: HttpProvider) {}

  get provider(): HttpProvider {
    return this._httpProvider;
  }
}

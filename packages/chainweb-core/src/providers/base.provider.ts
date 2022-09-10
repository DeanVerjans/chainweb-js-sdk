import { ChainEndpointBuilder } from '../builders';

export class BaseProvider {
  private readonly _urlBuilder: ChainEndpointBuilder;

  constructor() {
    this._urlBuilder = new ChainEndpointBuilder();
  }

  public get urlBuilder(): ChainEndpointBuilder {
    return this._urlBuilder;
  }
}

/**
 * URL Builder for the ChainWeb API
 */
export class ChainEndpointBuilder {
  private _path: string;
  private _chainId?: number | string;

  constructor() {
    this._path = '/';
  }

  public chainId(chainId: number): ChainEndpointBuilder {
    if (chainId < 0) {
      throw new Error('Chain cannot be smaller than 0');
    }
    this._chainId = chainId;
    return this;
  }

  public endpoint(path: string, params?: Record<string, any>): ChainEndpointBuilder {
    if (params) {
      Object.keys(params).forEach((key) => {
        path = path.replace(`:${key}`, params[key]);
      });
    }
    this._path = path;
    return this;
  }

  build(): string {
    if (this?._chainId >= 0) {
      return `/chain/${this._chainId}/${this._path}`;
    }
    return `/${this._path}`;
  }
}

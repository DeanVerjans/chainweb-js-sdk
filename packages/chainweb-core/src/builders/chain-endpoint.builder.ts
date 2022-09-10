/**
 * Chain Endpoint Builder for the ChainWeb API
 */
export class ChainEndpointBuilder {
  private _path: string;
  private _chainId?: number | string;

  constructor() {
    this._path = '/';
  }

  /**
   * Adds the chain id to the endpoint if it's greater than 0
   * @param {number} chainId - Represents the id of the requested chain
   */
  public chainId(chainId: number): ChainEndpointBuilder {
    if (chainId < 0) {
      throw new Error('Chain cannot be smaller than 0');
    }
    this._chainId = chainId;
    return this;
  }

  /**
   * Selects a path and replace all the path variables of the endpoint
   * @param {string} path - Path to the requested endpoint
   * @param {object} params - Contains all the endpoint parameters
   */
  public endpoint(
    path: string,
    params?: Record<string, string | number | boolean | null>
  ): ChainEndpointBuilder {
    if (params) {
      Object.keys(params).forEach((key) => {
        path = path.replace(`:${key}`, params[key]?.toString());
      });
    }
    this._path = path;
    return this;
  }

  /**
   * Build the endpoint based of the variables that have been set
   */
  build(): string {
    if (this?._chainId >= 0) {
      return `/chain/${this._chainId}/${this._path}`;
    }
    return `/${this._path}`;
  }
}

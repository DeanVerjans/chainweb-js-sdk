import { ChainOptions } from '@/types';

/**
 * URL Builder for the ChainWeb API
 */
export class UrlBuilder {
  private _network: string;
  private _host: string;
  private _path: string;
  private _chainId?: number | string;
  private _params: URLSearchParams;

  constructor({ network = 'mainnet01', host = 'https://api.chainweb.com' }: ChainOptions) {
    this._network = network;
    this._host = host;
    this._path = '/';
    this._params = new URLSearchParams();
  }

  public network(network: string): UrlBuilder {
    this._network = network;
    return this;
  }

  public host(host: string): UrlBuilder {
    this._host = host;
    return this;
  }

  public chainId(chainId: number | string): UrlBuilder {
    this._chainId = chainId;
    return this;
  }

  public path(path: string): UrlBuilder {
    this._path = path;
    return this;
  }

  public appendParam(key: string, value: string | number | undefined) {
    if (!value) {
      return this;
    }
    this._params.append(key, value.toString());
    return this;
  }

  build(): URL {
    const urlBase = `${this._host}/chainweb/0.0/${this._network}`;
    if (this?._chainId >= 0) {
      return new URL(`${urlBase}/chain/${this._chainId}${this._path}?${this._params.toString()}`);
    }
    return new URL(`${urlBase}/${this._path}?${this._params.toString()}`);
  }
}

import { UrlBuilder } from '@/builders';
import { ChainOptions, Request } from '@/types';

export abstract class Provider {
  private readonly _urlBuilder: UrlBuilder;

  protected constructor(options: ChainOptions) {
    this._urlBuilder = new UrlBuilder(options);
  }

  public abstract performRequest<T, R>(request: Request<T>): Promise<R>;
}

import { Provider } from './provider';
import { ResponseFormat, Request, ChainOptions } from '@/types';

/**
 * Provider for handling all the Http requests
 */
export class HttpProvider extends Provider {
  constructor(options?: ChainOptions) {
    super(options);
  }

  /**
   *
   * @param request
   */
  public async performRequest<T, R>(request: Request<T>): Promise<R> {
    try {
      const response = await fetch(request.url.toString(), {
        method: request.method,
        body: JSON.stringify(request?.payload),
        headers: {
          'content-type': ResponseFormat.JSON,
        },
      });

      return response.json();
    } catch (e) {
      throw e;
    }
  }
}

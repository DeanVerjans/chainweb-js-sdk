import { ResponseFormat, GetParams, ChainOptions, SubSet, MutationParams } from '../types';
import { BaseProvider } from './base.provider';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Provider for handling all the Http requests
 */
export class HttpProvider extends BaseProvider {
  private readonly _instance: AxiosInstance;

  constructor({ network = 'mainnet01', host = 'https://api.chainweb.com' }: ChainOptions) {
    super();
    this._instance = axios.create({
      baseURL: `${host}/chainweb/0.0/${network}`,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });
  }

  /**
   *
   * @param endpoint
   * @param query
   * @param responseFormat
   */
  public async get<T extends GetParams, R = unknown>(
    endpoint: string,
    { query, responseFormat }: SubSet<GetParams, T>
  ): Promise<R> {
    return this._instance
      .get(endpoint, {
        headers: {
          Accept: responseFormat || ResponseFormat.JSON,
        },
        params: query,
      })
      .then((d: AxiosResponse<R>) => d.data);
  }

  public async post<T, R = unknown>(
    endpoint: string,
    { body, responseFormat, query }: SubSet<MutationParams, T>
  ): Promise<R> {
    console.log(query);
    return this._instance
      .post(endpoint, body, {
        headers: {
          Accept: responseFormat || ResponseFormat.JSON,
        },
        params: query,
      })
      .then((res: AxiosResponse<R>) => {
        console.log(res);
        return res.data;
      });
  }

  public async put<T, R = unknown>(endpoint: string, data?: T): Promise<R> {
    return this._instance
      .post(endpoint, data, {
        headers: {
          Accept: ResponseFormat.JSON,
        },
      })
      .then((res: AxiosResponse<R>) => {
        console.log(res);
        return res.data;
      });
  }
}

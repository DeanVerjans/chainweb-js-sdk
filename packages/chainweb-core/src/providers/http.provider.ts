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
   * Http GET-request to receive data of the requested node resource
   * @param {string} endpoint - The endpoint of the node resource
   * @param {object} query - Query strings that need to be added to the request
   * @param {ResponseFormat} responseFormat - Response format of the node
   */
  public async get<T extends GetParams, R = unknown>(
    endpoint: string,
    { query, responseFormat }: SubSet<GetParams, T>
  ): Promise<R> {
    return this._instance
      .get(endpoint, {
        headers: {
          Accept: responseFormat || ResponseFormat.ALL,
        },
        params: query,
      })
      .then((res: AxiosResponse<R>) => res.data);
  }

  /**
   * Http POST-request to receive/mutate data of the requested node resource
   * @param {string} endpoint - The endpoint of the node resource
   * @param {object} body - Json body that need to be added to the request
   * @param {object} query - Query strings that need to be added to the request
   * @param {ResponseFormat} responseFormat - Response format of the node
   */
  public async post<T, R = unknown>(
    endpoint: string,
    { query, body, responseFormat }: SubSet<MutationParams, T>
  ): Promise<R> {
    return this._instance
      .post(endpoint, body, {
        headers: {
          Accept: responseFormat || ResponseFormat.ALL,
        },
        params: query,
      })
      .then((res: AxiosResponse<R>) => res.data);
  }

  /**
   * Http PUT-request to mutate data of the requested node resource
   * @param {string} endpoint - The endpoint of the node resource
   * @param {object} body - Json body that need to be added to the request
   * @param {object} query - Query strings that need to be added to the request
   * @param {ResponseFormat} responseFormat - Response format of the node
   */
  public async put<T, R = unknown>(
    endpoint: string,
    { query, body, responseFormat }: SubSet<MutationParams, T>
  ): Promise<R> {
    return this._instance
      .post(endpoint, body, {
        headers: {
          Accept: responseFormat || ResponseFormat.ALL,
        },
        params: query,
      })
      .then((res: AxiosResponse<R>) => res.data);
  }
}

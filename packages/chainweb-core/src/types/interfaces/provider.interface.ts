import { ResponseFormat } from '../';

export interface GetParams {
  query?: any;
  responseFormat?: ResponseFormat;
}

export interface MutationParams {
  query?: any;
  body?: any;
  responseFormat?: ResponseFormat;
}

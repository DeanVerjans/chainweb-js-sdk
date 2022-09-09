import { HttpMethod, ResponseFormat } from '../enums';

export interface Request<T = any> {
  url: URL;
  payload?: T;
  method: HttpMethod;
  format: ResponseFormat;
}

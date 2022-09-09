export enum ResponseFormat {
  JSON = 'application/json;blockheader-encoding=object',
  BINARY = 'application/octet-stream',
  BASE64_URL = 'application/json',
}

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

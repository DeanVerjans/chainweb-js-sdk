export enum Endpoint {
  GET_BLOCK_HEADERS = 'header',
  GET_BLOCK_HEADER_BY_BLOCK_HASH = 'header/:blockHash',
  GET_BLOCK_HEADER_BRANCHES = 'header/branch',
  GET_BLOCK_HASHES = 'hash',
  GET_BLOCK_HASH_BRANCHES = 'hash/branch',
}

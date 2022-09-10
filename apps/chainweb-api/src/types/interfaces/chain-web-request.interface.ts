export interface ChainRequest {
  chainId: number;
}

export interface RequestBody {
  upper?: string[];
  lower?: string[];
}

export interface RequestQueryString {
  minheight?: number;
  maxheight?: number;
  limit?: number;
  next?: string;
}

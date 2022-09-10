export interface ChainRequest {
  chainId: number;
}

export interface RequestBody {
  upper?: string[];
  lower?: string[];
}

export interface RequestQueryString {
  minHeight?: number;
  maxHeight?: number;
  limit?: number;
  next?: string;
}

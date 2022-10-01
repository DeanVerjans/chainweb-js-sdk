import { ResponseList } from '../../chain-web-response.interface';

export interface BlockHeaderList extends ResponseList<BlockHeader> {}

export interface BlockHeader {
  nonce: string;
  creationTime: number;
  parent: string;
  adjacents: Record<string, string>;
  target: string;
  payloadHash: string;
  chainId: number;
  weight: string;
  height: number;
  chainWebVersion: string;
  epochStart: number;
  featureFlags: number;
  hash: string;
}

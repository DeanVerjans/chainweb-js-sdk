import { chainWeb } from '.';

/**
 * @todo check response types
 * @todo check direct types of responses
 */

/**
 * Block Header
 */
describe('Block Header Namespace', () => {
  test('Should get block headers of chain', async () => {
    const blockHeaders = await chainWeb.api.blockHeader.getBlockHeaders({
      params: {
        chainId: 0,
      },
      query: {
        limit: 25,
      },
    });
    expect(blockHeaders.items.length).toBe(25);
    expect(blockHeaders.limit).toBe(25);
  });
  test('Should get block headers of chain with query strings (minHeight - maxHeight)', async () => {
    const blockHeaders = await chainWeb.api.blockHeader.getBlockHeaders({
      params: {
        chainId: 0,
      },
      query: {
        limit: 50,
        minheight: 5000,
        maxheight: 10000,
        // next @todo figure out
      },
    });
    expect(blockHeaders.items[0].height).toBeGreaterThanOrEqual(5000);
    expect(blockHeaders.items[blockHeaders.items.length - 1].height).toBeLessThanOrEqual(10000);
  });
  test('Get Block header by hash', async () => {
    const blockHeader = await chainWeb.api.blockHeader.getBlockHeaderByHash({
      params: {
        chainId: 0,
        blockHash: 'SNAMXHBvZtAbeS19x12bZV2p5d1E4BaxrggceNdUxbw',
      },
    });
    expect(blockHeader.hash).toBe('SNAMXHBvZtAbeS19x12bZV2p5d1E4BaxrggceNdUxbw');
  });
  test('Should not be able to get unknown Block header hash', async () => {
    await expect(
      chainWeb.api.blockHeader.getBlockHeaderByHash({
        params: {
          chainId: 0,
          blockHash: 'dpwy82z9X3iqpKccSD6NDIbkuRRi4PNhdKG-4CS-y-I',
        },
      })
    ).rejects.toThrow('Request failed with status code 404');
  });
  test('Should get a empty block header branches', async () => {
    const blockHeaderBranches = await chainWeb.api.blockHeader.getBlockHeaderBranches({
      params: {
        chainId: 0,
      },
      body: {
        lower: [],
        upper: [],
      },
    });
    expect(blockHeaderBranches.limit).toBe(0);
    expect(blockHeaderBranches.items.length).toBe(0);
  });
  test('Should get the block header branches with lower and upper', async () => {
    const blockHeaderBranches = await chainWeb.api.blockHeader.getBlockHeaderBranches({
      params: {
        chainId: 0,
      },
      body: {
        lower: ['RClyuyZAacwvPpmLXKbTwrIRXWeUSjiNhJVP2esH8KM'],
        upper: ['QxGCAz5AY1Y41nh1yWtgqhKhZ9pPiPRagFdIKNqBH74'],
      },
    });
    expect(blockHeaderBranches.items.length).toBe(1);
    expect(blockHeaderBranches.limit).toBe(1);
  });
});

/**
 * Block Hash
 */
describe('Block Hash Namespace', () => {
  test('Should get block hashes of a chain', async () => {
    const blockHeaders = await chainWeb.api.blockHash.getBlockHashes({
      params: {
        chainId: 0,
      },
      query: {
        limit: 25,
      },
    });
    expect(blockHeaders.items.length).toBe(25);
    expect(blockHeaders.limit).toBe(25);
  });
  test('Should get an empty block hash branches', async () => {
    const blockHeaderBranches = await chainWeb.api.blockHash.getBlockHashBranches({
      params: {
        chainId: 0,
      },
      body: {
        lower: [],
        upper: [],
      },
    });
    expect(blockHeaderBranches.limit).toBe(0);
    expect(blockHeaderBranches.items.length).toBe(0);
  });
  test('Should get an empty block hash branches', async () => {
    const blockHeaderBranches = await chainWeb.api.blockHash.getBlockHashBranches({
      params: {
        chainId: 0,
      },
      body: {
        lower: ['RClyuyZAacwvPpmLXKbTwrIRXWeUSjiNhJVP2esH8KM'],
        upper: ['QxGCAz5AY1Y41nh1yWtgqhKhZ9pPiPRagFdIKNqBH74'],
      },
    });
    expect(blockHeaderBranches.items.length).toBe(1);
    expect(blockHeaderBranches.limit).toBe(1);
    console.log(blockHeaderBranches);
  });
});

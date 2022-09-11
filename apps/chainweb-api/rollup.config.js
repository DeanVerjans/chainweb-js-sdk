import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

const config = [
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        typescript: ttypescript,
        useTsconfigDeclarationDir: true,
        emitDeclarationOnly: true,
      }),
      json(),
    ],
    output: {
      file: 'dist/es/index.js',
      format: 'es',
      sourcemap: true,
      exports: 'auto',
    },
    external: ['chainweb-sdk-core'],
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        typescript: ttypescript,
        useTsconfigDeclarationDir: true,
        emitDeclarationOnly: true,
      }),
      nodeResolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
    ],
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    external: ['chainweb-sdk-core'],
  },
];
export default config;

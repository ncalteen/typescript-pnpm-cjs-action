// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const config = {
  input: 'src/index.ts',
  output: {
    esModule: false,
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [typescript(), nodeResolve({ preferBuiltins: true }), commonjs()]
}

export default config

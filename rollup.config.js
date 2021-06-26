import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const prodConfig = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [autoprefixer()],
      modules: true,
    }),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

export default prodConfig;

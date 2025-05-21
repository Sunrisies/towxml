import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'temp/index.js',
        format: 'cjs',
        name: 'towxml'
    },
    plugins: [
        nodeResolve(),
        commonjs()
    ]
}
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')

const targetConfigs = [
  {
    extension: '.es.js',
    format: 'es',
    babel: {
      presets: [], plugins: []
    }
  },
  {
    extension: '.js',
    format: 'umd',
    babel: {
      presets: [
        ['latest', {
          'es2015': {
            'modules': false
          }
        }]
      ],
      plugins: ['external-helpers']
    }
  },
  {
    extension: '.min.js',
    format: 'umd',
    plugins: [uglify()],
    babel: {
      presets: [
        ['latest', {
          'es2015': {
            'modules': false
          }
        }]
      ],
      plugins: ['external-helpers']
    },
    sourceMap: true
  }
]

targetConfigs.forEach(target => {
  rollup.rollup({
    entry: './index.js',
    plugins: (target.plugins || []).concat([
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: target.babel.presets,
        plugins: target.babel.plugins
      })
    ])
  }).then(bundle => {
    bundle.write({
      dest: `dist/${pkg.name}${target.extension}`,
      format: target.format,
      moduleName: pkg.name,
      sourceMap: target.sourceMap
    })
  })
})

const Sass = require('sass')
const Fiber = require('fibers')

// 安裝 GA、FB Pixel：https://ithelp.ithome.com.tw/articles/10212098

export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  //  壓縮圖片 https://squoosh.app/editor
  target: 'static',
  router: {
    base: '/risingFilmEn/'
  },
  head: {
    titleTemplate: '%s',
    title: 'RISING FILMS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title'  , content: 'RISING FILMS'},
      { hid: 'og:image' , property: 'og:image' , content: 'logo.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      // { hid: 'og:url' , property: 'og:url' , content: ''},
      { hid: 'description', name: 'description', content: 'Rising Films has been promoting talents in Taiwanese film industry and managing resources, ideas and business models, in hope of creating a new future.' },
      { hid: 'og:description' , property: 'og:description' , content: 'Rising Films has been promoting talents in Taiwanese film industry and managing resources, ideas and business models, in hope of creating a new future.'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/risingFilmEn/favicon.ico' }
    ]
  },
  // SCSS 配置
  browserslist: "cover 99.5%",
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      },
      // https://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
    },
    babel: {
      presets({isServer}) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [ require.resolve("@babel/preset-env"), { targets }  ]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ],
      compact: false
      // 引入文件超過 500 KB 不報錯
    },
    /*
    ** You can extend webpack config here
    */
   // 在 console 可以看見 css 位置
    cssSourceMap: true,
    parallel: true,
    cache: false,
    extractCSS: process.env.NODE_ENV === 'production',
    optimizeCSS: process.env.NODE_ENV === 'production',
    transpile: ['vue-intersect'],
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      },
      order: 'cssnanoLast'
    },
    vendor: ['vue-lazyload', 'element-ui'],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/roboto/roboto.css',
    'swiper/swiper-bundle.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*@nuxtjs/style-resources*/
  styleResources: {
    //array of strings that are paths to the file:
    // scss: ['~assets/styles/globalvariables.scss']
  },
  loader: 'sass-loader',
    options: {
        sassOptions: {
            indentedSyntax: true
        }
    },
  //
  plugins: [
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    // '@nuxtjs/sitemap',
  ],
  // sitemap: {
  //   path: '/sitemap.xml', // sitemap名稱，不用改
  //   hostname: 'https://siddharam.com/', // 網址
  //   cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
  //   gzip: true, // 生成 .xml.gz 檔的 sitemap
  //   generate: true, // 允許使用 nuxt generate 生成
  //   // 排除不要的頁面路由
  //   exclude: [

  //   ],
  //   // 靜態頁面路徑
  //   routes: [
  //   ]
  // },
  axios: {
    
  }
}

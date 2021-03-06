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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/roboto/roboto.css',
    // 'swiper/swiper-bundle.css',
    'swiper/css/swiper.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
          config.output.publicPath = './_nuxt/'
      }
      return config;
    },
    transpile: ['resize-detector'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
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
  }
}

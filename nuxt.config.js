const NAME = 'Name'
const DESCRIPTION = 'Description'
const BASE_URL = '/nuxt-starter/'
const THEME_COLOR = '#005bac'

export default {
  css: [
    '~/assets/fonts.css'
  ],

  loading: { color: THEME_COLOR },

  plugins: [],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],

  googleAnalytics: { id: '' },

  manifest: {
    name: NAME,
    short_name: NAME,
    description: DESCRIPTION,
    scope: BASE_URL,
    display: 'standalone',
    start_url: `${BASE_URL}?utm_source=homescreen`,
    theme_color: THEME_COLOR,
    background_color: THEME_COLOR
  },

  meta: {
    name: NAME,
    description: DESCRIPTION,
    appleStatusBarStyle: 'black-translucent',
    ogHost: `https://int-i.github.io${BASE_URL}`,
    ogImage: 'social_preview.png'
  },

  mode: 'universal',

  router: { base: BASE_URL },

  build: {}
}

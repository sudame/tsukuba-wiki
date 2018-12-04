module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'tsukuba-wiki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    {
      src: '@fortawesome/fontawesome-free/scss/fontawesome.scss',
      lang: 'scss',
    },
  ],
  plugins: ['~plugins/authState.js'],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  // mode: 'spa',
};

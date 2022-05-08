export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode:"spa",
  //ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'loan-platform',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCiQJIFAhDn3OcHF1Y2LqxwYYpMIHHH97c",
          authDomain: "loan-platform-95977.firebaseapp.com",
          projectId: "loan-platform-95977",
          storageBucket: "loan-platform-95977.appspot.com",
          messagingSenderId: "623384353383",
          appId: "1:623384353383:web:a3ddb0f8a023c97f6812c2"
        },
        services:{
          auth: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
          },
        }

      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

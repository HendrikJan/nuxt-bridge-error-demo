import { defineNuxtConfig } from '@nuxt/bridge';

console.log('Nuxt config loading...');

export default defineNuxtConfig({
  rootDir: new URL('./', import.meta.url).pathname,

  bridge: {
    vite: false,
  },
  telemetry: false,

  nitro: {
    externals: {
      inline: ['uuid'],
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },

  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [],

  compilerOptions: {
    types: ['@nuxt/types'],
  },

  build: {},
  watchers: {
    webpack: {
      poll: 1000,
    },
  },

  ssr: false,
});

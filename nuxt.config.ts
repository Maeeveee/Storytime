// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/icon', 'nuxt-tiptap-editor', 'dayjs-nuxt', '@pinia/nuxt'],
  components: false,
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: import.meta.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  tiptap: {
    prefix: 'Tiptap'
  },
  icon: {
    mode: 'svg'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables" as *;'
        }
      }
    }
  },

  nitro: {
    devProxy: {
      '/api': {
        target: `${import.meta.env.NUXT_API_TARGET_URL}/api`,
        changeOrigin: true,
      },
      '/sanctum': {
        target: `${import.meta.env.NUXT_API_TARGET_URL}/sanctum`,
        changeOrigin: true,
      }
    }
  }
})
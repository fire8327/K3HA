// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@formkit/nuxt"
  ],  
  googleFonts: {
    families: {
      'Roboto': true,
      'Roboto Slab': true
    }
  },
  supabase: {
    redirect: false
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})
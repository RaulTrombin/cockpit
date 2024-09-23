import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import { VitePWA } from 'vite-plugin-pwa'
import vuetify from 'vite-plugin-vuetify'

const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

// Determine if the build is for Electron based on an environment variable
const isElectron = process.env.BUILD_TARGET === 'electron'

export default defineConfig({
  plugins: [
    isElectron &&
      electron({
        main: {
          entry: 'electron/main.ts',
        },
      }),
    vue(),
    vuetify({
      autoImport: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    }),
  ].filter(Boolean),
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/libs/videoStorage': isElectron
        ? path.resolve(__dirname, 'src/libs/videoStorage.electron.ts')
        : path.resolve(__dirname, 'src/libs/videoStorage.browser.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: '0.0.0.0',
  },
})

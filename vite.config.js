import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server:{
    hmr: {
        overlay: false
    }
  },
})
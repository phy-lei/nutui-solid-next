import { defineConfig } from 'vite'
import solidPlugin from './plugin/vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
})

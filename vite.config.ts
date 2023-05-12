import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:3000
  },
  plugins: [
    Unocss(),
    react()
  ],
})

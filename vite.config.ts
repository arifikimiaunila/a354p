 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'vite-plugin-sass'
import './dropdown scss/drop.scss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sass()
    ],
})

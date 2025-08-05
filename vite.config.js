import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/emojiCalendar/', // Add this line (replace with your actual repo name)
})
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import './index.css'
import store, { key } from './store'
import { initRemSize } from '@/assets/tools/index'
import { createLibDefs } from '@/assets/createLibDefs'

function initApp() {
  createApp(App).use(store, key).use(router).mount('#app');
}

(function init() {
  initRemSize()
  createLibDefs()
  initApp()
})()

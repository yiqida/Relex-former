import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import { initRemSize } from '@/assets/tools/index'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

function initApp() {
  createApp(App).use(store, key).use(router).mount('#app');
}

(function init() {
  initRemSize();
  initApp()
})()

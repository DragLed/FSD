import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '../routs/index.js'
import App from './App.vue'
import '../styles/main.css'
import { initAuth } from '../init/initAuth.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initAuth().finally(() => {
  app.mount('#app')
})

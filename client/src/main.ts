import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'


import App from './App.vue'
import router from './router'
import PrimevueOptions from './config/primevue.config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, PrimevueOptions)

app.mount('#app')

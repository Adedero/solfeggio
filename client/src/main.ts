import './assets/main.css'
import 'primeicons/primeicons.css';
import '@fontsource-variable/montserrat';
import 'material-icons/iconfont/outlined.css';
import 'material-icons/iconfont/round.css';
import '@coddicat/vue-pinch-scroll-zoom/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { GesturePlugin } from '@vueuse/gesture'


import App from './App.vue'
import router from './router'
import PrimevueOptions from './config/primevue.config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, PrimevueOptions)
app.use(GesturePlugin)

app.mount('#app')

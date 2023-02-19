/** @format */

import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// scss
import './sass/index.scss'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App).use(vuetify)

app.use(router)
app.mount('#app')

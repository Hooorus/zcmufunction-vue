import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// mdi-icon
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
//flag-icons
import "/node_modules/flag-icons/css/flag-icons.min.css";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')

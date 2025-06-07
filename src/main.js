import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'

import 'vuetify/styles' // Import Vuetify styles
import { createVuetify } from 'vuetify' // Vuetify plugin
import * as components from 'vuetify/components' // All components
import * as directives from 'vuetify/directives' // All directives
import '@mdi/font/css/materialdesignicons.css' // MDI Icons


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    defaults: {
        VBtn: {
            // Set font for buttons globally
            style: {
                fontFamily: '"Questrial", sans-serif',
            },
        },
    },

})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

import Vue, { VNode } from 'vue'
import App from './app.vue'
import VueCompositionApi from '@vue/composition-api'
import './assets/tailwindcss.css'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
    render: (h): VNode => h(App),
}).$mount('#app')

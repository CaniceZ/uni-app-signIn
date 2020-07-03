import Vue from 'vue'
import App from './App'
import {BASE_URL} from 'common/config.js'
console.log(BASE_URL)
Vue.config.productionTip = false
Vue.prototype.$baseUrl = BASE_URL
App.mpType = 'app'
import '@/styles/flex.scss' // global css

const app = new Vue({
	...App
})
app.$mount()

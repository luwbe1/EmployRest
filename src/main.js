// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

/* eslint no-undef: "off" */
new Vue({
    render: h => h(App)
}).$mount('#app')
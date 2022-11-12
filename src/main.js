import { createApp } from 'vue'
import App from './App.vue'

// For vue router links
import router from './router/router'
// for vuex store 
import store from './store/index'
createApp(App).use(router).use(store).mount('#app')
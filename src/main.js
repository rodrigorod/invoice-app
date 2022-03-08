import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from "vuefire";

createApp(App).use(store).use(router).use(firestorePlugin).mount('#app')
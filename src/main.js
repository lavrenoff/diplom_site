import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import PrimeVue from 'primevue/config';
// import "primevue/resources/themes/lara-light-indigo/theme.css";


createApp(App).use(store).use(router).mount('#app');
// App.use(PrimeVue);
// App.mount('#app');


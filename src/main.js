import { createApp } from 'vue';
import AppShop from '@/AppShop.vue';
import store from '@/storage/store.js';
import router from '@/router/index.js';


const app = createApp(AppShop);
app.use(store);
app.use(router);
app.mount('#app');

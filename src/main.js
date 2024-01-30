import './assets/scss/all.scss';
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.config.globalProperties.$bs = bootstrap;

app.mount('#app');

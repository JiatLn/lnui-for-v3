import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

import LnUI from '../packages/index'

createApp(App).use(router).use(store).use(LnUI).mount('#app')

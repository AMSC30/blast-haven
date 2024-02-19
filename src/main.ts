import { createApp } from 'vue';
import pinia from '/@/stores/index';
import App from '/@/App.vue';
import router from '/@/router';
import { i18n } from '/@/i18n/index';

import ElementPlus from 'element-plus';
import '/@/theme/index.scss';
import './init';

const app = createApp(App);

app.use(pinia).use(router).use(ElementPlus).use(i18n).mount('#app');

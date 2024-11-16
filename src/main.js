import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import naive from 'naive-ui';
import router from './router/router'; // 引入我們剛剛配置的 router
import 'tailwindcss/tailwind.css';

const app = createApp(App);
app.use(naive);
app.use(router); // 使用 Vue Router
app.mount('#app');

import { createApp } from 'vue'
import App from './App.vue'
import { init, viewport } from '@tma.js/sdk-vue'
init();
await viewport.mount();
await viewport.requestFullscreen();
createApp(App).mount('#app');

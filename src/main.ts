import { createApp } from 'vue'
import App from './App.vue'
import { init, viewport } from '@tma.js/sdk-vue'
init();
await viewport.mount();
await viewport.requestFullscreen();
viewport.safeAreaInsetTop();
viewport.contentSafeAreaInsetTop();
createApp(App).mount('#app');

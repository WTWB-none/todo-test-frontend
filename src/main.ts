import { createApp } from 'vue'
import App from './App.vue'
import { init, viewport, requestFullscreen } from '@telegram-apps/sdk-vue'
init();
viewport.mount();
requestFullscreen();
createApp(App).mount('#app')

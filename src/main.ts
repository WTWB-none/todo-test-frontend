import { createApp } from 'vue'
import App from './App.vue'
import { init, miniApp, viewport } from '@telegram-apps/sdk-vue'
init();
if (miniApp.mountSync.isAvailable()) {
  miniApp.mountSync();
  miniApp.isMounted();
}
viewport.mount();
viewport.isMounted();
await viewport.requestFullscreen();
viewport.isFullscreen();
createApp(App).mount('#app')

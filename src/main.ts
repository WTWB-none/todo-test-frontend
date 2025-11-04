import { createApp } from 'vue'
import App from './App.vue'
import { init, miniApp, viewport } from '@telegram-apps/sdk-vue'
init();
if (miniApp.mountSync.isAvailable()) {
  miniApp.mountSync();
  miniApp.isMounted();
}

if (viewport.mount.isAvailable()) {
  viewport.mount();
  viewport.isMounted();
}

if (viewport.requestFullscreen.isAvailable()) {
  await viewport.requestFullscreen();
  viewport.isFullscreen();
}
createApp(App).mount('#app')

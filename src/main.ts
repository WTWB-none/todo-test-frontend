import { createApp } from 'vue'
import App from './App.vue'
import { init, miniApp, requestFullscreen } from '@telegram-apps/sdk-vue'
init();
if (miniApp.mountSync.isAvailable()) {
  miniApp.mountSync();
  miniApp.isMounted();
}
requestFullscreen();
createApp(App).mount('#app')

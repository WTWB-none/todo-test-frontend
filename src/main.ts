import { createApp } from 'vue'
import App from './App.vue'
import { init, requestFullscreen } from '@telegram-apps/sdk-vue'
init();
requestFullscreen();
createApp(App).mount('#app')

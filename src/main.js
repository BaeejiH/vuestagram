import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app =  createApp(App);

// 글로벌한 변수 보관함, 모든 곳에서 emitter의 변수를 쓸 수 있음.
app.config.globalProperties.emitter = emitter;
app.mount('#app')

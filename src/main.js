import { createApp } from 'vue';
import App from './App.vue';
import SpeechToText from './components/SpeechToText.vue';

const app = createApp(App);

app.component('SpeechToText', SpeechToText);

app.mount('#app');

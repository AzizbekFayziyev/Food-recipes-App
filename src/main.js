import { createApp } from 'vue';
import App from '@/App.vue';
import "@/assets/scss/main.scss";
import 'aos/dist/aos.css';
import components from '@/components';
import router from '@/router';
import store from './store';
import AOS from 'aos';
import directives from './directives';
import VueIframe from 'vue-iframes';

const app = createApp(App);

components.map(component => app.component(component.name, component));
directives.map(dir => app.directive(dir.name, dir))

app.use(AOS.init());
app.use(VueIframe)
app.use(router);
app.use(store);


app.mount('#app');

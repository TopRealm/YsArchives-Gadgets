import {createApp} from 'vue';
import App from './App.vue';

const root = document.createElement('div');
document.body.append(root);
// App类型丢失，手动设置类型 @typescript-eslint/no-unsafe-argument
createApp(App as unknown as import('vue').DefineComponent).mount(root);

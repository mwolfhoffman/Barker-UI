import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Main from './main.vue'
import router from './router';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    router,
    render: r => r(Main)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
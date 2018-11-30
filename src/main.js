import Vue from 'vue';
import App from './App.vue';
import store from './store'

Vue.config.productionTip = false;

// コンポーネント読み込み
const requireComponent = require.context(
  './components',
  true,
  /^.\/(The|Base)[A-Z][a-zA-Z0-9]{0,}\.vue/
);
requireComponent.keys().forEach(fileName => {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');
  Vue.component(baseComponentName, baseComponentConfig);
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

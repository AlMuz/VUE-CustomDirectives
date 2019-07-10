import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.background = 'green';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

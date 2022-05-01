// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import settings from './settings';

// element-ui配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 调用插件
Vue.use(ElementUI);

// 导入css初始化文件
import '../static/css/reset.css';

// 使用axios发送请求
import axios from 'axios'; // 从node_modules目录中导入包
// 允许ajax发送请求时附带cookie，false表示阻止axios附带cookie
axios.defaults.withCredentials = false;
// 把对象挂载vue中
Vue.prototype.$axios = axios; 

Vue.prototype.$settings = settings
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

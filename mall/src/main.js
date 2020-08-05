import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// mock开关，开启才会拦截
const mock = true;
if(mock){
  require("./mock/api")
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';    // 这是easy-mock平台构建虚拟数据
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){  // 0表示请求成功
    return res.data;
  }else if(res.status == 10){ // 10表示需要登录
    window.location.href = "/#/login";
  }else{  // 请求错误
    alert(res.msg);
  }
})

// Vue使用插件
Vue.use(VueAxios, axios)

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

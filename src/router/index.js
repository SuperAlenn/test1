import Vue from 'vue'
import Router from 'vue-router'
import MyHeader from 'components/my-header/my-header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MyHeader
    }
  ]
})

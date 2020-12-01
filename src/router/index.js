/*
 * @Author: your name
 * @Date: 2020-12-01 15:45:04
 * @LastEditTime: 2020-12-01 16:06:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Other from '@/views/other/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})

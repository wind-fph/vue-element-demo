<!--
 * @Author: your name
 * @Date: 2020-12-01 15:45:04
 * @LastEditTime: 2020-12-01 16:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-demo/src/App.vue
-->
<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>
import layout from './components/layout/layout_default'
export default {
  name: 'App',
  components: {layout}
}
</script>

<style>
body{
  margin: 0;
  font-size: 14px;
}
</style>

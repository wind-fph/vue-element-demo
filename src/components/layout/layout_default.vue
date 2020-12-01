<!--
 * @Author: your name
 * @Date: 2020-12-01 15:49:00
 * @LastEditTime: 2020-12-01 16:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-demo/src/components/layout/layout_default.vue
-->
<template>
<el-container style="height: 100%; position:absolute;width:100%">
  <el-scrollbar class="aside-scrollbar">
    <el-aside>
      <!-- 菜单 -->
      <el-menu :default-openeds="['1']" background-color="#333" text-color="#ffffff">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <router-link to="/"><el-menu-item index="1-1">首页</el-menu-item></router-link>
            <router-link to="/other"><el-menu-item index="1-2">其他</el-menu-item></router-link>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-scrollbar>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <!-- 这里设置头部 -->
      <span>Coleman</span>
    </el-header>

    <el-main>
      <slot/>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #FFFFFF;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #e2e2e2;
    box-shadow: 1px 1px 10px #e6e6e6;
  }

  .el-aside {
    color: #333;
    width: 100% !important;
  }
  .aside-scrollbar{
    background: #333;
    width: 250px;

  }
  .aside-scrollbar .el-scrollbar__wrap{
    overflow-x: hidden;
  }
  .el-menu{
    border:none
  }

</style>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

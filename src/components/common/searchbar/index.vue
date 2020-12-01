<!--
 * @Author: Perry
 * @Date: 2020-11-19 12:00:00
 * @LastEditTime: 2020-12-01 16:24:26
 * @LastEditors: Please set LastEditors
 * @Description: 筛选组件
-->
<template>
  <el-card class="searchbar">
    <el-row :gutter="50">
      <slot></slot>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <el-button size="small" type="primary" @click="search">
          查询
        </el-button>
        <el-button size="small" @click="reset">
          重置
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  name: 'searchbar',
  props: {},
  methods: {
    // 查询方法，回调查询事件
    search () {
      this.$emit('search', 1)
    },
    reset () {
      this.$emit('reset')
      this.$emit('search', 1)
    }
  }
}
</script>
<style scoped>
.searchbar {
  margin-bottom: 15px;
}
</style>

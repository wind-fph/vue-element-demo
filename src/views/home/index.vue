<!--
 * @Author: your name
 * @Date: 2020-12-01 16:00:58
 * @LastEditTime: 2020-12-01 16:29:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-demo/src/components/home/index.vue
-->
<template>
  <div>
    <searchbar @search="search" @reset="resetParams">
      <searchbar-item :label="'名称'">
        <el-input
          size="small"
          v-model="searchParams.name"
          :placeholder="'名称'"
          maxlength="10"
        ></el-input>
      </searchbar-item>
      <searchbar-item :label="'名称'">
        <el-input
          size="small"
          v-model="searchParams.name"
          :placeholder="'名称'"
          maxlength="10"
        ></el-input>
      </searchbar-item>
      <searchbar-item :label="'名称'">
        <el-input
          size="small"
          v-model="searchParams.name"
          :placeholder="'名称'"
          maxlength="10"
        ></el-input>
      </searchbar-item>
      <searchbar-item :label="'名称'">
        <el-input
          size="small"
          v-model="searchParams.name"
          :placeholder="'名称'"
          maxlength="10"
        ></el-input>
      </searchbar-item>
    </searchbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchParams: {
        name: ''
      }
    }
  },
  methods: {
    search () {},
    resetParams () {}
  }
}
</script>

<style>

</style>

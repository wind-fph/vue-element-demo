<!--
 * @Author: Perry
 * @Date: 2020-11-19 13:35:49
 * @LastEditTime: 2020-12-01 16:28:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /likeclass.platformAdmin.web/src/components/searchbar/searchitem.vue
-->
<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
    <div class="search-item">
      <div class="search-item-label">{{ label }}</div>
      <div class="search-item-input">
        <slot></slot>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: {
    // 查询标题，必传，后期有特殊需要再改成选传
    label: {
      default: '',
      require: true
    }
  },
  name: 'searchbar-item'
}
</script>
<style>
.search-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

}
  .search-item-label {
    min-width: 70px;
  }
  .search-item-input {
    width: 100%;
  }
  .el-select,
  .el-date-editor {
    width: 100%;
  }
</style>

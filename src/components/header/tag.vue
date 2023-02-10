<template>
  <div class="tags-view-container">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable="">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tags:[
        {name:"首页"}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .tags-view-container {
    position: fixed;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
  }
</style>
<template>
  <div class="header-page">
    <div class="user-admin">管理员</div>
  </div>
</template>

<script>
export default {
  name: "UserHeader"
}
</script>

<style lang="less" scoped>
    .header-page {
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-shadow: 4px 3px 10px #f2f3f3;
        .user-admin {
          float: right;
          margin-right: 20px;
        }
    }
</style>
<template>
  <div class="init">
    <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>

</style>
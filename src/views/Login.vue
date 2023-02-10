<template>
<div class="l-page fillcontain">
  <div id="login-box">
    <div class="logo-container">
        <img src="../assets/logo.png" alt="" />
    </div>
    <div style="margin:20px 0;font-size:20px">饥荒管理后台</div>
    <div class="user-main">
        <el-form :label-position="labelPosition" :model="loginForm" ref="ruleForm" label-width="100px" class="login-ruleForm">
            <el-form-item class="user-input" label="用户名" prop="pass">
                <el-input  type="text" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  class="user-input" label="密码" prop="pass">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    
  </div>
</div>
  
</template>

<script>
export default {
    data(){
        return {
            loginForm: {
                username: "",
                password: ""
            },
            labelPosition: 'right',
        }
    },
    methods:{
        submitForm(){
            this.$router.push({ name: 'admin', params: { userId: '123' }})
        },
    },
    mounted(){
        this.$router.push({ name: 'init-regPage'})
    }
}
</script>

<style lang="less" scoped>
    .l-page {
        background: rgb(195, 228, 227);
    }
    #login-box {
        width: 500px;
        height: 400px;
        text-align: center;
        // background: #fff;
        margin: auto;
        transform: translateY(40%);
        .logo-container {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .user-main {
            width: 100%;
            height: 60%;
            // border: 1px solid #a4a4a9;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 40px 0;
            background: rgba(244, 248, 245, 0.321);
            .user-input {
                width: 90%;
                // margin-top: 15px;
            }
        }
    }
</style>
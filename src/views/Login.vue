<template>
    <div class="login-container">
        <el-form ref="loginForm" class="login-form" ::rules="loginRules" :model="loginForm" label-position="left">
            <div class="title-container">
                <h3 class="title">{{loginTitle}}</h3>
                <img class="icon" src="Login.vue"/>
            </div>
            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user"/>
                </span>
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {},
                loginTitle: '登录',
                loginRules: {}
            }

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    //修改当前页面的element-ui样式
    $bg:#283443;
    $light_gray:#eee;
    $cursor: #fff;
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: $cursor !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    $bg: #2d3a4b;
    .login-container {
        background-color: $bg;
        height: 100%;
        width: 100%;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            margin: 120px auto;
        }
    }

    .title-container {
        .title {
            font-size: 26px;
            color: dimgray;
            text-align: center;
        }
        .icon {
            position: absolute;
            top: 30px;
            right: 0;
        }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
</style>

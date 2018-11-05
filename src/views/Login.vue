<template>
    <div class="login-container">
        <el-form ref="loginForm" class="login-form" :rules="loginRules" :model="loginForm" label-position="left">
            <div class="title-container">
                <h3 class="title">{{loginTitle}}</h3>
            </div>
            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user"/>
                </span>
                <el-input v-model="loginForm.username" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password"/>
                </span>
                <el-input v-model="loginForm.password" :type="passwordType" @keyup.enter.native="handleLogin"></el-input>
                <span class="svg-eye" @click="showPwd">
                    <svg-icon icon-class="eye"/>
                </span>
            </el-form-item>
            <div class="verify-container">
                <el-form-item prop="verifyCode">
                    <el-input v-model="loginForm.verifyCode" @keyup.enter.native="handleLogin"></el-input>
                </el-form-item>
                <span class="img-verify">
                    <ImgVerify ref="imgVerify" @imgCode="imgCode" />
                </span>
            </div>
            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;">Login</el-button>
        </el-form>
    </div>
</template>

<script>
    import ImgVerify from '@/components/VerificationCode'
    export default {
        components: {ImgVerify},
        data() {
            const validateUsername = (rule, value, callback) => {
                var regu = "^[ ]+$";
                var re = new RegExp(regu);
                if (value == '') {
                    callback(new Error('Please enter the correct user name'))
                }else if(re.test(value)){
                    callback(new Error('Please enter the correct user name'))
                }else {
                    callback()
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('The password can not be less than 6 digits'))
                } else {
                    callback()
                }
            }
            const validateVerify = (rule,value,callback) => {
                if(value.toUpperCase() !== this.verifyCode){
                    setTimeout(() =>{
                        this.$refs.imgVerify.draw()
                    },1000)
                    callback(new Error('验证码输入错误'))
                }
            }
            return {
                loginForm: {},
                loginTitle: '登录',
                loginRules: {
                    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                    password: [{ required: true, trigger: 'blur', validator: validatePassword }],
                    verifyCode: [{ required: true, trigger: 'blur', validator: validateVerify }],
                },
                passwordType: 'password',
                verifyCode:'',
                loading:false,

            }

        },
        methods:{
            imgCode(value){
                this.verifyCode = value
            },
            showPwd(){
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
            },
            handleLogin(){
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
        position: fixed;
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
            color: aliceblue ;
            text-align: center;
        }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    .svg-eye{
        display: inline-block;
        color: #889aa4;
    }
    .img-verify{
        float: right;
    }
    .verify-container{
        .el-form-item {
            float: left;
            width: 70%;
            .el-input{
                width: 100%;
                display: inline-block;
            }
        }

    }
</style>

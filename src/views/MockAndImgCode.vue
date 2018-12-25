<template>
    <div id="app">
        <h3>前端图片验证码：</h3>
        <ImgVerify @imgCode="imgCode" ref="imgVerify"/>
        <div style="margin: 20px 0">
            <button @click="handleClick">点击</button>
        </div>
        <Bus2></Bus2>
        <fieldset>
            <legend>说明：</legend>
            <ul>
                <li>使用canvas实现图片验证码</li>
                <li>4位数字与大写字母随机显示</li>
                <li>5条干扰线</li>
                <li>40个干扰小点</li>
            </ul>
        </fieldset>
        <div>
            <el-button type="primary" @click="api404">404接口</el-button>
            <el-button type="primary" @click="api500">500接口</el-button>
            <el-button type="primary" @click="testMock">mock测试</el-button>
            <el-button type="primary" @click="loginByUsername">200的接口</el-button>
            <el-button type="primary" @click="login">在线mock接口</el-button>
        </div>
    </div>
</template>

<script>
    import ImgVerify from '@/components/VerificationCode'
    import Bus2 from './layout/bus2'
    import {loginByUsername,test404,test500,testMock,login} from '@/api/login'
    export default {
        name: 'App',
        provide: {
            name: 'Aresn'
        },
        methods: {
            imgCode(code) {
                console.log(code)
            },
            handleClick(){
                this.$refs.imgVerify.draw()
            },

            api404(){
               test404().then(request => {

               })
            },
            api500(){
               test500().then(request => {

               })
            },
            testMock(){
                testMock().then(request => {
                    console.log(request)
                })
            },
            loginByUsername(){
                loginByUsername().then(request => {
                    console.log(request)
                })
            },
            login(){
               login().then(request => {
                   console.log(request)
               })
            }
        },
        components: {
            ImgVerify,Bus2
        }
    }
</script>

<style>
    #app {
    }
</style>

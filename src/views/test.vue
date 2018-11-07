<template>
    <div id="app">
        <h3>前端图片验证码：</h3>
        <ImgVerify @imgCode="imgCode" ref="imgVerify"/>
        <div style="margin: 20px 0">
            <button @click="handleClick">点击</button>
        </div>
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
        </div>
    </div>
</template>

<script>
    import ImgVerify from '@/components/VerificationCode'
    import axios from 'axios'
    export default {
        name: 'App',
        methods: {
            imgCode(code) {
                console.log(code)
            },
            handleClick(){
                this.$refs.imgVerify.draw()
            },
            api404(){
                axios.post('/api/test404')
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            api500(){
                axios.post('/api/test500')
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },
        components: {
            ImgVerify
        }
    }
</script>

<style>
    #app {
    }
</style>

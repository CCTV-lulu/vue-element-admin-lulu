<template>
    <div class="com" style="height: 100%">
        <sidebar></sidebar>
        <div class="main" style="float: left;margin-left: 30px">
            <h1 ref="title">{{message}}</h1>
            <button ref="myButton" @click="clickedButton">点击偶</button>
            <ul v-for=" n in list">
                <li :ref="n" >{{n}}</li>
            </ul>
            <span ref="text" v-show="Value">这是一段文字</span>
            <button @click="getValue">点击展示</button>
        </div>

    </div>
</template>

<script>
    import sidebar from '@/components/sidebar.vue'
    export default {
        name: 'about',
        components: {
            sidebar
        },
        data(){
            return{
                message:'Hi,lulu',
                list:[1,2,3,4,5,6,7],
                Value:false
            }
        },
        mounted(){
            this.getMockApi()
        },
        methods:{
            clickedButton(){
                this.$refs.title.style.color = 'red'
                console.log(this.$refs[1]);
            },
            getValue(){
                this.Value = true
                console.log(this.$refs)
            },
            getMockApi(){
                this.$http.post('https://private-45f2743-cctvlulu.apiary-mock.com/questions').then(request => {
                    console.log(request)
                })

            }
        }
    }
</script>

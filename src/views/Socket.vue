<template>
    <div>
        <p>hhhhhh</p>
    </div>

</template>

<script>
    export default {
        name: "dash",
        data(){
            return{
                websock:null
            }
        },
        created() {
            this.initWebSocket()
        },
        destroyed: function() {
            this.websocketclose()
        },
        methods: {
            initWebSocket() {
                const wsuri = 'ws://127.0.0.1:8080'
                this.websock = new WebSocket(wsuri)
                this.websock.onopen = this.websocketonopen
                this.websock.onerror = this.websocketonerror
                this.websock.onmessage = this.websocketonmessage
                this.websock.onclose = this.websocketclose
            },
            websocketonopen() {
                var self = this
                // setInterval(function () {
                    self.websock.send('message')
                // },1000)

                console.log('WebSocket连接成功')
            },
            websocketonerror(e) {
                console.log('WebSocket连接发生错误')
            },
            websocketonmessage(e) {
                // var data = JSON.parse(e)
                console.log(e.data)
                // if (chartdata.code === '200') {
                //
                // }
            },
            websocketsend(agentData) {
                this.websock.send(agentData)
            },
            websocketclose(e) {
                console.log('connection closed (' + e.code + ')')
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <p>第二个组件</p>
        <p>{{data}}</p>
    </div>
</template>

<script>
    export default {
        name: "bus2",
        data(){
            return{
                data:''
            }
        },
        created(){
            var self = this
            this.$bus.on('data',function (value) {
                self.data = value
            })
        }
    }
</script>

<style scoped>

</style>

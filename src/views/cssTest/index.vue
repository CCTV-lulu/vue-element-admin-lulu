<template>
    <div>
        <div class="cssSize">
            <p>使用厘米长度</p>
            <button class="size-cm"></button>
        </div>
        <div>
            <p>使用毫米长度</p>
            <button class="size-mm"></button>
        </div>
        <div class="size-em">
            <p>这是一个测试em单位根据字体变化而变化的div组</p>
            <div class="em1">
                这里使用1em
            </div>
            <div class="em2">
                这里使用2em
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .size-cm{
        width: 2cm;
        height: 2cm;
    }
    .size-mm{
        width: 20mm;
        height: 20mm;
    }
    .em1{
        border: 1px solid #bd393f;
        background-color: #42b983;
        height: 2em;
        width: 8em;
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: .5em;
    }
    .em2{
        border: 1px solid #bd4b39;
        background-color: #42b983;
        height: 2em;
        width: 8em;
        font-size: 40px;
        line-height: 1.5;
    }
</style>

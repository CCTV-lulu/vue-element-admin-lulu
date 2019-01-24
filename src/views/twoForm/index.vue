<template>
<el-form ref="form" :model="bean" label-suffix="" label-width="170px" label-position="left" >
    <el-row :gutter="20">
        <el-col :span="12">
            <el-form-item  label="AAAAAAAA1" class="item" >
                <el-input v-model="bean.a1"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item v-if="false" label="AAAAAAAA2" class="item" >
                <el-input v-model="bean.a2"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item  label="AAAAAAAA3" class="item" >
                <el-input v-model="bean.a3"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item  label="AAAAAAAA4" class="item" >
                <el-input v-model="bean.a4"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item  label="AAAAAAAA5" class="item" >
                <el-input v-model="bean.a5"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item v-if="false" label="AAAAAAAA1" class="item" >
                <el-input v-model="bean.a1"></el-input>
            </el-form-item>
        </el-col>
    </el-row>

</el-form>
</template>
<script>
    export default {
        name:'index',
        data(){
            return{
                bean:{
                    a1:'a1',
                    a2:'a2',
                    a3:'a3',
                    b1:'b1',
                    b2:'b2',
                    b3:'b3'
                }
            }
        }
    }
</script>

<style scoped>
    .form {
      width: 800px;
    }
    .form-left {
        float: left;
        width:50%; padding-left:10px; padding-right:10px; padding-top:10px;
    }
    .form-right {
        float: right;
        width:50%; padding-left:10px; padding-right:10px; padding-top:10px;
    }
</style>

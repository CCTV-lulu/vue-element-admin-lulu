<template>
    <div>
        <div>
            <button @click="handleOpen1">打开提示 1</button>
            <button @click="handleOpen2">打开提示 2</button>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名">
                <template slot-scope="scope">
                    <el-form :model="scope.row" :rules="rules" ref="ruleForm">
                        <el-form-item prop="name">
                            <el-input size="small" v-model="scope.row.name"></el-input>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份">
                <template slot-scope="scope">
                    <el-form :model="scope.row" :rules="rules" ref="ruleForm">
                        <el-form-item prop="province">
                            <el-input size="small" v-model="scope.row.province"></el-input>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    var validateMineParamsValueInput = (rule, value, callback) => {
        //输入为空
        if (!value) {
            return callback(new Error('请输入**'))
        } else {
            //自定义验证
            callback()
        }
    }
    export default {
        name: "index",
        data(){
            return{
                tableData:[{name:'小虎',province:'河北'}],
                ruleForm: {
                    name: '',
                    province:''
                },
                rules:{
                    name:[
                        { validator: validateMineParamsValueInput, trigger: 'blur' }
                    ],
                    province:[
                        { validator: validateMineParamsValueInput, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleOpen1 () {
                this.$Alert.info({
                    content: '我是提示信息 1'
                });
            },
            handleOpen2 () {
                this.$Alert.info({
                    content: '我是提示信息 2',
                    duration: 3
                });
            }
        }
    }
</script>

<style scoped>

</style>

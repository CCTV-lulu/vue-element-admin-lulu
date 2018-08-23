<template>
    <el-table :data="tableData3"
              style="width: 100%"
              :span-method="arraySpanMethod">
        <el-table-column label="任务单">
            <el-table-column
                    prop="taskNo"
                    label="任务单号">
            </el-table-column>
            <el-table-column
                    prop="contractNo"
                    label="合同号">
            </el-table-column>
            <el-table-column
                    prop="product"
                    label="产品">
            </el-table-column>
            <el-table-column
                    prop="planCount"
                    label="计划数">
            </el-table-column>
            <el-table-column
                    prop="deliverDate"
                    label="交付日期">
            </el-table-column>
        </el-table-column>
        <el-table-column label="工单">
            <el-table-column
                    prop="workNo"
                    label="工单号">
            </el-table-column>
            <el-table-column
                    prop="workPlanCount"
                    label="计划数">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态">
            </el-table-column>
        </el-table-column>
        <el-table-column label="派工单">
            <el-table-column
                    prop="PieList"
                    label="派工单">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="顺序号">
            </el-table-column>
            <el-table-column
                    prop="workProduct"
                    label="工序">
            </el-table-column>
            <el-table-column
                    prop="equipment"
                    label="设备">
            </el-table-column>
        </el-table-column>
        <el-table-column label="报工单">
            <el-table-column
                    prop="readList"
                    label="报工单">
            </el-table-column>
            <el-table-column
                    prop="count"
                    label="数量">
            </el-table-column>
            <el-table-column
                    prop="workerMan"
                    label="加工人">
            </el-table-column>
            <el-table-column
                    prop="workStatus"
                    label="状态">
            </el-table-column>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "complexTable",
        data() {
            return {
                tableData3: []
            }
        },
        mounted(){
            this.getTableData()
        },
        methods:{
            arraySpanMethod({ row, column, rowIndex, columnIndex }){

            },
            getTableData(){
                var data = [
                    {
                        //任务单
                        taskNo:'RE1234444',
                        contractNo:'567565',
                        product:'测试产品',
                        planCount:'50',
                        deliverDate:'2018/6/7',
                        //工单
                        workNo:'TT578667',
                        workPlanCount:'Kk6767',
                        status:'r6788',
                        // 派工单
                        PieList:'T89889',
                        number:'5',
                        workProduct:'ahgagh',
                        equipment:'安排',
                        //报工单
                        readList:'L7676',
                        count:'889',
                        workerMan:'张三',
                        workStatus:'status2'
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>
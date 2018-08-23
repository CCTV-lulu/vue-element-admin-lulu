<template>
    <div>
        <div id="subOutputRank-print" v-show="false">
            <div>
                <div class="sgin">
                    <span class="sginLeft">纽式激光标</span>
                    <span class="sginRight">外观要求：</span>
                </div>
                <div>
                    <p class="processReq">特殊加工要求</p>
                    <h1 class="title">纽式达特工序流转卡</h1>
                </div>
                <div class="equipmentInfo">
                    <span>{{equipmentName}}</span>
                    <span>{{equipmentNo}}</span>
                    <span>计划完工日期{{planDate}}</span>
                    <span>生产任务单号{{planNo}}</span>
                </div>
                <div class="table">
                    <table border="1px solid" class="tableInfo">
                        <tr>
                            <th v-for="item in tableTitle">{{item}}</th>
                        </tr>
                        <tr>
                            <td v-for=" item in tableBody">{{item}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div class="sgin">
                    <span class="sginLeft">纽式激光标</span>
                    <span class="sginRight">外观要求：</span>
                </div>
                <div>
                    <p class="processReq">特殊加工要求</p>
                    <h1 class="title">纽式达特工序流转卡</h1>
                </div>
                <div class="equipmentInfo">
                    <span>{{equipmentName}}</span>
                    <span>{{equipmentNo}}</span>
                    <span>计划完工日期{{planDate}}</span>
                    <span>生产任务单号{{planNo}}</span>
                </div>
                <div class="table">
                    <table border="1px solid" class="tableInfo">
                        <tr>
                            <th v-for="item in tableTitle">{{item}}</th>
                        </tr>
                        <tr>
                            <td v-for=" item in tableBody">{{item}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <button @click="dayin">打印</button>
        <img  class="image" src="@/assets/webImage.jpg" alt="@/assets/webImage.jpg"/>
    </div>
</template>

<script>
    export default {
        name: "Print",
        data() {
            return {
                equipmentName: '太阳轮 PS400.010.04(花键)标',
                equipmentNo: 'PS400.010.04',
                planDate: '2018/6/4',
                planNo: 'K79585_19',
                tableTitle: ['一个', '两个', '三个'],
                tableBody: ['12', '12', '1245']
            }
        },
        methods: {
            dayin() {
                let subOutputRankPrint = document.getElementById('subOutputRank-print');
                let newContent = subOutputRankPrint.innerHTML;
                let oldContent = document.body.innerHTML;
                document.body.innerHTML = newContent;
                window.print();
                window.location.reload();
                document.body.innerHTML = oldContent;
                return false;
            }
        }

    }
</script>

<style scoped>
    .sgin {
        padding-top: 30px;
        width: 100%;
        height: 30px;
    }

    .sginLeft {
        float: left;
        margin-left: 200px;
    }

    .sginRight {
        float: right;
        margin-right: 200px;
    }

    .processReq {
        float: left;
        margin-left: 150px;
    }

    .title {
        margin-left: 40%;
        font-weight: normal;
    }

    .equipmentInfo {
        width: 100%;
    }

    .equipmentInfo span {
        margin: 0 5%;
    }

    .table {
        width: 100%;
        margin: 10px 30px 0 30px;
        page-break-after: always;
    }

    .tableInfo {
        width: 95%;
        border-collapse: collapse;
    }

    th {
        font-weight: normal;
    }

    td {
        text-align: center;
    }
    .image{
        height: 100px;
        width: 100px;
    }

    @media print {
        /*@page {*/
        /*size: A4 landscape;*/
        /*}*/
    }
</style>
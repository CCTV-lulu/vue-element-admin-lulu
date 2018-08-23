<template>
    <div class="father">
        <zk-table  ref="table" max-height=40
                   sum-text="sum"
                   index-text="#"
                   :data="data"
                   :columns="columns"
                   :stripe="props.stripe"
                   :border="props.border"
                   :show-header="props.showHeader"
                   :show-summary="props.showSummary"
                   :show-row-hover="props.showRowHover"
                   :show-index="props.showIndex"
                   :tree-type="props.treeType"
                   :is-fold="props.isFold"
                   :expand-type="props.expandType"
                   :selection-type="props.selectionType"></zk-table>
    </div>
</template>

<script>
    export default {
        name: "TreeTable",
        data(){
            return{
                props: {
                    stripe: false,
                    border: true,
                    showHeader: true,
                    showSummary: false,
                    showRowHover: true,
                    showIndex: true,
                    treeType: true,
                    isFold: true,
                    expandType: false,
                    selectionType: true,
                },
                data: [
                    {
                        name: 'Jack',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 10,
                        children: [
                            {
                                name: 'Ashley',
                                sex: 'female',
                                likes: ['football', 'basketball'],
                                score: 20,
                                children: [
                                    {
                                        name: 'Ashley',
                                        sex: 'female',
                                        likes: ['football', 'basketball'],
                                        score: 20,
                                    },
                                    {
                                        name: 'Taki',
                                        sex: 'male',
                                        likes: ['football', 'basketball'],
                                        score: 10,
                                        children: [
                                            {
                                                name: 'Ashley',
                                                sex: 'female',
                                                likes: ['football', 'basketball'],
                                                score: 20,
                                            },
                                            {
                                                name: 'Taki',
                                                sex: 'male',
                                                likes: ['football', 'basketball'],
                                                score: 10,
                                                children: [
                                                    {
                                                        name: 'Ashley',
                                                        sex: 'female',
                                                        likes: ['football', 'basketball'],
                                                        score: 20,
                                                    },
                                                    {
                                                        name: 'Taki',
                                                        sex: 'male',
                                                        likes: ['football', 'basketball'],
                                                        score: 10,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Taki',
                                sex: 'male',
                                likes: ['football', 'basketball'],
                                score: 10,
                            },
                        ],
                    },
                    {
                        name: 'Tom',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 20,
                        children: [
                            {
                                name: 'Ashley',
                                sex: 'female',
                                likes: ['football', 'basketball'],
                                score: 20,
                                children: [
                                    {
                                        name: 'Ashley',
                                        sex: 'female',
                                        likes: ['football', 'basketball'],
                                        score: 20,
                                    },
                                    {
                                        name: 'Taki',
                                        sex: 'male',
                                        likes: ['football', 'basketball'],
                                        score: 10,
                                    },
                                ],
                            },
                            {
                                name: 'Taki',
                                sex: 'male',
                                likes: ['football', 'basketball'],
                                score: 10,
                                children: [
                                    {
                                        name: 'Ashley',
                                        sex: 'female',
                                        likes: ['football', 'basketball'],
                                        score: 20,
                                    },
                                    {
                                        name: 'Taki',
                                        sex: 'male',
                                        likes: ['football', 'basketball'],
                                        score: 10,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Tom',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 20,
                    },
                    {
                        name: 'Tom',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 20,
                        children: [
                            {
                                name: 'Ashley',
                                sex: 'female',
                                likes: ['football', 'basketball'],
                                score: 20,
                            },
                            {
                                name: 'Taki',
                                sex: 'male',
                                likes: ['football', 'basketball'],
                                score: 10,
                            },
                        ],
                    },
                ],
                columns: [
                    {
                        label: 'name',
                        prop: 'name',
                        width: '400px',
                    },
                    {
                        label: 'sex',
                        prop: 'sex',
                        minWidth: '50px',
                    },
                    {
                        label: 'score',
                        prop: 'score',
                    },
                    {
                        label: 'likes',
                        prop: 'likes',
                        minWidth: '200px',
                        type: 'template',
                        template: 'likes',
                    },
                ],
            }
        }
    }
</script>

<style>
    .zk-table__body-wrapper{
        height: 200px !important;
    }
</style>
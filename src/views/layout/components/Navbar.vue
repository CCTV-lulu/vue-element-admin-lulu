<template>
    <div class="navbar">
        <hamburger :toggle-click="toggleSideBar" :is-active="sidebar" class="hamburger-container"></hamburger>
        <div class="right-menu">
            <el-tooltip effect="dark" placement="bottom" content="全屏">
                <screenfull class="screenfull right-menu-item"/>
            </el-tooltip>
        </div>
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
                <img src="https://pic.cr173.com/up/2017-3/14891372565430891.gif" class="user-avatar">
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
                <router-link to="/">
                    <el-dropdown-item>
                        dashboard
                    </el-dropdown-item>
                </router-link>
                <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
                    <el-dropdown-item>
                        github
                    </el-dropdown-item>
                </a>
                <el-dropdown-item divided>
                    <span style="display:block;" @click="logout">logOut</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    // import { mapGetters } from 'vuex'
    import Screenfull from '@/components/Screenfull'
    import Hamburger from '@/components/Hamburger'
    export default {
        data(){
           return{
               sidebar:false
           }
        },
        components: {
            Screenfull,
            Hamburger
        },
        // computed: {
        //     ...mapGetters([
        //         'sidebar'
        //     ])
        // },
        method:{
            toggleSideBar() {
                this.$store.dispatch('toggleSideBar')
            },
            logout(){

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar{
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        background-color: #f4f4f5;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .right-menu{
            float: right;
            height: 100%;
            &:focus{
                outline: none;
            }
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
            }
            .screenfull {
                margin-top: 15px;
                height: 20px;
            }
        }
        .avatar-container {
            height: 50px;
            margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>

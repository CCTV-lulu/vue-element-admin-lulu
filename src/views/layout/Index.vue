<template>
    <div>
        <sidebar-item class="sidebar-container" />
        <div class="main-container">
            <navbar/>
            <app-main/>
        </div>
        <!--<router-view :key="key"/>-->
    </div>
</template>

<script>
    import SidebarItem from './components/SidebarItem'
    import Navbar from './components/Navbar'
    import AppMain from './components/AppMain'
    export default {
        components: {AppMain, Navbar, SidebarItem },
        computed: {
            key() {
                return this.$route.fullPath
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div id="main-page">
        <side-nav></side-nav>
        <div class="main-container">
            <top-header></top-header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import SideNav from './SideNav.vue'

export default {
    components: {
        'TopHeader': TopHeader,
        'SideNav': SideNav
    },
}
</script>

<style scoped>
    #main-page {
        height: 100%;
        display: flex;
        background-color: #f3f3f3;
    }
    .main-container {
        width: 100%;
        height: 100%;
    }
</style>
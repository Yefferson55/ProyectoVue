<template>
    <div class="container">
        <sideBar></sideBar>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
import sideBar from '../components/sideBar.vue';
</script>
<style>
.container{
    display: flex;
}
.content{
    flex: 1;
    padding: 20px;
}
</style>
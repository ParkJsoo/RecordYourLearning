<template>
    <div id="top-header">
        <div class="top_search">
            <input id="search" type="text" placeholder="Search">
            <i class="fab fa-sistrix"></i>
        </div>
        <div class="top_button_box">
            <button @click="goHome" type="button" class="top_button">LOGOUT</button>
            <button type="button" class="top_button">MODIFY</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goHome : function() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    #top-header {
        width: 100%;
        height: 60px;
        display: flex;
        background-color: #fff;
        padding: 20px 80px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    }
    #search {
        width: 400px;
        height: 30px;
        margin-right: 10px;
        padding-left: 20px;
        border-radius: 20px;
        background-color: #f3f3f3;
    }
    #search::placeholder {
        color: #c2c2c2;
        font-size: 0.8rem;
    }
    .fa-sistrix {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        color: #fff;
        background-color: #24b6ba;
        text-align: center;
        vertical-align: middle;
        padding: 8px 0;
        box-sizing: border-box;
    }
    .top_button {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        border-radius: 25px;
        background-color: #f3f3f3;
        font-size: 0.8rem;
        font-weight: 600;
        color: #555555;
    }
</style>
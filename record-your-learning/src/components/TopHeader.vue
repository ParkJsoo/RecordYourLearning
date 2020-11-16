<template>
    <div id="top-header">
        <input id="search" type="text" placeholder="Search">
        <i class="fas fa-search"></i>
        <button type="button" class="top_button">LOGOUT</button>
        <button type="button" class="top_button">MODIFY</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #top-header {
        width: 100%;
        height: 80px;
        background-color: #fff;
        padding: 20px 0 20px 100px;
        box-sizing: border-box;
    }
    #search {
        width: 400px;
        height: 35px;
        margin-right: 10px;
        padding-left: 20px;
        border-radius: 20px;
        background-color: #f3f3f3;
    }
    #search::placeholder {
        color: #c2c2c2;
        font-size: 16px;
    }
    .fa-search {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        color: #fff;
        background-color: #24b6ba;
        text-align: center;
        vertical-align: middle;
        padding: 10px 0;
        box-sizing: border-box;
    }
    .top_button {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        border-radius: 25px;
        background-color: #f3f3f3;
        font-size: 16px;
        font-weight: 600;
        color: #555555;
        position: relative;
        left: 250px;
        vertical-align: middle;
    }
</style>
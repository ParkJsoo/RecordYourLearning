<template>
    <div id="home-homeworkBox">
        <div class="home-homeBox-header">
            <span class="home-homeBox-header_left">Home Work</span>
            <button class="home-homeBox-header_right" type="button">MORE</button>
        </div>
        <ul class="home-homeworkList-group">
            <li class="home-homeworkList">
                <span class="home-homeworkList-item">숙제</span>
                <button type="button" class="home-homeworkList-near">D - 1</button>
            </li>
            <li class="home-homeworkList">
                <span class="home-homeworkList-item">과제</span>
                <button type="button" class="home-homeworkList-near">D - 3</button>
            </li>
            <li class="home-homeworkList">
                <span class="home-homeworkList-item">레포트</span>
                <button type="button" class="home-homeworkList-far">D - 4</button>
            </li>
            <li class="home-homeworkList">
                <span class="home-homeworkList-item">레포트</span>
                <button type="button" class="home-homeworkList-far">D - 5</button>
            </li>
            <li class="home-homeworkList">
                <span class="home-homeworkList-item">레포트</span>
                <button type="button" class="home-homeworkList-far">D - 7</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #home-homeworkBox {
        height: 150px;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .home-homeBox-header {
        height: 20px;
        border-bottom: solid 1px #cccccc;
    }
    .home-homeBox-header_left {
        float: left;
        font-size: 12px;
        font-weight: 600;
        color: #24b6ba;
    }
    .home-homeBox-header_right {
        float: right;
        width: 50px;
        height: 15px;
        border-radius: 20px;
        background-color: #f3f3f3;
        font-size: 8px;
        font-weight: 600;
        color: #9e9e9e;
    }
    .home-homeworkList {
        height: 15px;
        margin: 5px 0;
    }
    .home-homeworkList-item {
        /* height: 25px; */
        color: #909090;
        font-size: 8px;
        vertical-align: middle;
    }
    .home-homeworkList-near {
        width: 40px;
        height: 15px;
        float: right;
        font-size: 8px;
        font-weight: 600;
        color: #fff;
        border-radius: 20px;
        background-color: #24b6ba;
    }
    .home-homeworkList-far {
        width: 40px;
        height: 15px;
        float: right;
        font-size: 8px;
        font-weight: 600;
        color: #fff;
        border-radius: 20px;
        background-color: #6a6a6a;
    }
</style>
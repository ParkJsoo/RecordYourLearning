<template>
    <div id="home-todayBox">
        <div class="home-homeBox-header">
            <span class="home-homeBox-header_left">Today</span>
            <button class="home-homeBox-header_right" type="button" @click="goToday">MORE</button>
        </div>
        <ul class="home-todayList-group">
            <li class="home-todayList">
                <i class="fas fa-check-circle"></i>
                <span class="home-todayList-item">영어단어 100개 외우기</span>
            </li>
            <li class="home-todayList">
                <i class="fas fa-minus-circle"></i>
                <span class="home-todayList-item">영어단어 100개 외우기</span>
            </li>
            <li class="home-todayList">
                <i class="fas fa-minus-circle"></i>
                <span class="home-todayList-item">영어단어 100개 외우기</span>
            </li>
            <li class="home-todayList">
                <i class="fas fa-minus-circle"></i>
                <span class="home-todayList-item">영어단어 100개 외우기</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        goToday : function() {
            this.$router.push('/main-page/board/today')
        }
    }
}
</script>

<style scoped>
    #home-todayBox{
        height: 310px;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .home-homeBox-header {
        height: 30px;
        border-bottom: solid 1px #cccccc;
    }
    .home-homeBox-header_left {
        float: left;
        font-size: 16px;
        font-weight: 600;
        color: #24b6ba;
    }
    .home-homeBox-header_right {
        float: right;
        width: 70px;
        height: 20px;
        border-radius: 20px;
        background-color: #f3f3f3;
        font-size: 12px;
        font-weight: 600;
        color: #9e9e9e;
    }
    .home-todayList-group {
        margin-top: 15px;
    }
    .home-todayList {
        height: 30px;
        border-radius: 25px;
        background-color: #f3f3f3;
        padding: 5px 20px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }
    .fa-check-circle {
        font-size: 14px;
        color: #24b6ba;
        margin-right: 10px;
    }
    .fa-minus-circle {
        color: #909090;
        font-size: 14px;
        margin-right: 10px;
    }
    .home-todayList-item {
        font-size: 12px;
        font-weight: 600;
        color: #909090;
    }
</style>
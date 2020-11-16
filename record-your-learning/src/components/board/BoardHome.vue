<template>
    <div id="board-home">
        <div class="todayBox">
            <div class="todayBox-header">
                <span class="todayBox-header_left">Today</span>
                <button class="todayBox-header_right" type="button">MORE</button>
            </div>
            <ul class="todayList-group">
                <li class="todayList">
                    <i class="fas fa-check-circle"></i>
                    <span class="todayList-item">영어단어 100개 외우기</span>
                </li>
                <li class="todayList">
                    <i class="fas fa-minus-circle"></i>
                    <span class="todayList-item">영어단어 100개 외우기</span>
                </li>
                <li class="todayList">
                    <i class="fas fa-minus-circle"></i>
                    <span class="todayList-item">영어단어 100개 외우기</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #board-home {
        padding: 40px 45px;
    }
    .todayBox{
        width: 550px;
        height: 300px;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .todayBox-header {
        height: 40px;
        border-bottom: solid 1px #cccccc;
    }
    .todayBox-header_left {
        float: left;
        font-size: 20px;
        font-weight: 600;
        color: #24b6ba;
    }
    .todayBox-header_right {
        float: right;
        width: 70px;
        height: 25px;
        border-radius: 20px;
        background-color: #f3f3f3;
        font-size: 12px;
        font-weight: 600;
        color: #9e9e9e;
    }
    .todayList-group {
        margin-top: 20px;
    }
    .todayList {
        height: 40px;
        border-radius: 25px;
        background-color: #f3f3f3;
        padding: 12px 20px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }
    .fa-check-circle {
        font-size: 16px;
        color: #24b6ba;
        margin-right: 10px;
    }
    .fa-minus-circle {
        color: #909090;
        font-size: 16px;
        margin-right: 10px;
    }
    .todayList-item {
        font-size: 16px;
        font-weight: 600;
        color: #909090;
    }
</style>
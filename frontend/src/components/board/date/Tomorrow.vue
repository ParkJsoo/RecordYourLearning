<template>
    <div id="tomorrow">
        <div class="tomorrow-header">
            <div class="tomorrow-title">Tomorrow</div>
            <div class="tomorrow-header-button">
                <button class="tomorrow-header-new" @click="newTomorrow = true">NEW</button>
                <new-tomorrow v-if="newTomorrow" @close-new="newTomorrow = false">
                    
                </new-tomorrow>
                <button class="tomorrow-header-delete">DELETE</button>
            </div>
        </div>
        <div class="tomorrow-board">
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="tomorrow-itemB">
                <div class="tomorrow-itemB-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="tomorrow-itemB-category">영어</div>
                    <div class="tomorrow-itemB-title">영어단어 100개 외우기</div>
                </div>
                <div class="tomorrow-item-contents">
                    <div class="tomorrow-item-time">
                        <span class="time-title">Time</span>
                        <span class="time-text">14:00 ~ 16:00</span>
                    </div>
                    <div class="tomorrow-item-text">
                        파이썬 프로그래밍 5주차 강의내용 복습하고 6주차 강의 수강하기
                        강의 수강 후 강의내용 정리하기
                        다음주에 배울 내용 예습하기
                    </div>
                </div>
            </div>
            <div class="tomorrow-itemA">
                <div class="tomorrow-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="tomorrow-itemA-category">영어</div>
                    <div class="tomorrow-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewTomorrow from '../modal/NewTomorrow.vue'

export default {
    data: function() {
        return {
            newTomorrow: false
        }
    },
    components: {
        'NewTomorrow': NewTomorrow
    },
}
</script>

<style scoped>
    #tomorrow {
        width: 100%;
    }
    .tomorrow-header {
        width: 100%;
        height: 75px;
        padding: 50px 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tomorrow-title {
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .tomorrow-header-new {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3f7fdf;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .tomorrow-header-delete {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f65151;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .tomorrow-board {
        width: 100%;
        padding: 0 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .tomorrow-itemA {
        width: 520px;
        height: 50px;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #fff;
    }
    .tomorrow-itemB {
        width: 520px;
        height: auto;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #fff;
    }
    .tomorrow-itemA-header {
        height: 50px;
        display: flex;
        padding-left: 20px;
        align-items: center;
    }
    .tomorrow-itemB-header {
        height: 50px;
        display: flex;
        padding-left: 20px;
        align-items: center;
        border-radius: 8px;
        border: solid 1px #cccccc;
        background-color: #24b6ba;
    }
    .tomorrow-itemA-header > .fa-check-circle {
        color: #24b6ba;
        margin-right: 10px;
    }
    .tomorrow-itemB-header > .fa-check-circle {
        color: #fff;
        margin-right: 10px;
    }
    .tomorrow-itemA-header > .fa-minus-circle {
        color: #909090;
        margin-right: 10px;
    }
    .tomorrow-itemB-header > .fa-minus-circle {
        color: #fff;
        margin-right: 10px;
    }
    .tomorrow-itemA-category {
        font-weight: bold;
        color: #555555;
        margin-right: 10px;
    }
    .tomorrow-itemB-category {
        font-weight: bold;
        color: #fff;
        margin-right: 10px;
    }
    .tomorrow-itemA-title {
        color: #909090;
    }
    .tomorrow-itemB-title {
        color: #fff;
    }
    .tomorrow-item-contents {
        padding: 0 20px;
    }
    .tomorrow-item-time {
        margin: 20px 0;
    }
    .time-title {
        font-weight: bold;
        color: #24b6ba;
        margin-right: 10px;
    }
    .time-text {
        color: #909090;
    }
    .tomorrow-item-text {
        width: 100%;
        margin-bottom: 20px;
        padding: 15px;
        color: #909090;
        line-height: 1.7;
        border: none;
        border-radius: 13px;
        background-color: #f8f8f8;
        box-sizing: border-box;
    }
</style>
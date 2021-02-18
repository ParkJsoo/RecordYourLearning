<template>
    <div id="today">
        <div class="today-header">
            <div class="today-title">Today</div>
            <div class="today-header-button">
                <button class="today-header-new" @click="newToday = true">NEW</button>
                <new-today v-if="newToday" @close-new="newToday = false">
                    
                </new-today>
                <button class="today-header-delete">DELETE</button>
            </div>
        </div>
        <div class="today-board">
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
            <div class="today-itemB">
                <div class="today-itemB-header">
                    <i class="fas fa-check-circle"></i>
                    <div class="today-itemB-category">영어</div>
                    <div class="today-itemB-title">영어단어 100개 외우기</div>
                </div>
                <div class="today-item-contents">
                    <div class="today-item-time">
                        <span class="time-title">Time</span>
                        <span class="time-text">14:00 ~ 16:00</span>
                    </div>
                    <div class="today-item-text">
                        파이썬 프로그래밍 5주차 강의내용 복습하고 6주차 강의 수강하기
                        강의 수강 후 강의내용 정리하기
                        다음주에 배울 내용 예습하기
                    </div>
                </div>
            </div>
            <div class="today-itemA">
                <div class="today-itemA-header">
                    <i class="fas fa-minus-circle"></i>
                    <div class="today-itemA-category">영어</div>
                    <div class="today-itemA-title">영어단어 100개 외우기</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewToday from '../modal/NewToday.vue'

export default {
    data: function() {
        return {
            newToday: false
        }
    },
    components: {
        'NewToday': NewToday
    },
}
</script>

<style scoped>
    #today {
        width: 100%;
    }
    .today-header {
        width: 100%;
        height: 75px;
        padding: 50px 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .today-title {
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .today-header-new {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3f7fdf;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .today-header-delete {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f65151;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .today-board {
        width: 100%;
        height: 100%;
        padding: 0 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .today-itemA {
        width: 48%;
        height: 50px;
        box-sizing: border-box;
        margin-bottom: 30px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #fff;
    }
    .today-itemB {
        width: 48%;
        height: auto;
        box-sizing: border-box;
        margin-bottom: 30px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #fff;
    }
    .today-itemA-header {
        height: 50px;
        display: flex;
        padding-left: 20px;
        align-items: center;
    }
    .today-itemB-header {
        height: 50px;
        display: flex;
        padding-left: 20px;
        align-items: center;
        border-radius: 8px;
        border: solid 1px #cccccc;
        background-color: #24b6ba;
    }
    .today-itemA-header > .fa-check-circle {
        color: #24b6ba;
        margin-right: 10px;
    }
    .today-itemB-header > .fa-check-circle {
        color: #fff;
        margin-right: 10px;
    }
    .today-itemA-header > .fa-minus-circle {
        color: #909090;
        margin-right: 10px;
    }
    .today-itemB-header > .fa-minus-circle {
        color: #fff;
        margin-right: 10px;
    }
    .today-itemA-category {
        font-weight: bold;
        color: #555555;
        margin-right: 10px;
    }
    .today-itemB-category {
        font-weight: bold;
        color: #fff;
        margin-right: 10px;
    }
    .today-itemA-title {
        color: #909090;
    }
    .today-itemB-title {
        color: #fff;
    }
    .today-item-contents {
        padding: 0 20px;
    }
    .today-item-time {
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
    .today-item-text {
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
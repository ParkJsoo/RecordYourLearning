<template>
    <div id="this_week">
        <div class="week-title">This Week</div>
        <div class="week-board">
            <div class="week-container">
                <div class="item-title">Sun</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">영어단어 100개 외우기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">자바스크립트 제어문 실습</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">파이썬 프로그래밍 6주차 강의 수강하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">월요일 시험보는 과목 교안 읽어보기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">커뮤니케이션 시험공부</span>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Mon</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">임베디드 중간고사 시험대비</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">웹디자인 중간고사 시험대비</span>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Tue</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">중간고사 시험대비</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">수요일 시험보는 과목 교안 읽어보기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">못외운 영어단어 외우기</span>
                </div>
                <div class="week-button">
                    <button class="week-new">NEW</button>
                    <button class="week-delete">DELETE</button>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Wed</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
                <div class="week-button">
                    <button class="week-new">NEW</button>
                    <button class="week-delete">DELETE</button>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Thu</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">공부하고 공부하기</span>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Fri</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">공부하고 공부하기</span>
                </div>
                 <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
            </div>
            <div class="week-container">
                <div class="item-title">Sat</div>
                <div class="week-item">
                    <i class="fas fa-check-circle"></i>
                    <span class="item-text">공부하고 공부하기</span>
                </div>
                 <div class="week-item">
                    <i class="fas fa-minus-circle"></i>
                    <span class="item-text">공부계획 실행하기</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #this_week {
        overflow-x: auto;
    }
    .week-title {
        width: 100%;
        height: 75px;
        margin-top: 40px;
        padding: 0 80px;
        box-sizing: border-box;
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .week-board {
        width: 100%;
        padding: 0 50px 50px 50px;
        display: flex;
    }
    .week-container {
        min-width: 280px;
        max-width: 300px;
        height: 400px;
        margin: 0 20px;
        padding: 25px 10px;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        overflow-y: auto;
    }
    .item-title {
        font-size: 20px;
        font-weight: bold;
        color: #555555;
        text-align: center;
    }
    .week-item {
        width: 200px;
        height: auto;
        padding: 10px 15px;
        margin: 20px auto;
        display: flex;
        align-items: center;
        border-radius: 20px;
        background-color: #f3f3f3;
    }
    .fa-check-circle {
        color: #24b6ba;
        margin-right: 10px;
    }
    .fa-minus-circle {
        color: #909090;
        margin-right: 10px;
    }
    .item-text {
        font-size: 14px;
        font-weight: normal;
        color: #909090;
        line-height: 1.43;
    }
    .week-button {
        text-align: center;
    }
    .week-new {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3f7fdf;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .week-delete {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f65151;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
</style>
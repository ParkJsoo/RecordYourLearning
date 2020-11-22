<template>
    <div id="board-homework">
        <div class="homework-header">
            <div class="homework-title">Home work</div>
            <div class="homework-header-button">
                <button class="homework-header-new">NEW</button>
                <button class="homework-header-delete">DELETE</button>
            </div>
        </div>
        <div class="homework-board">
            <div class="homework-item">
                <div class="homework-item-header">
                    <div class="homework-item-contents">
                        <div class="homework-item-title contents-line">
                            <span class="contentA">Title</span>
                            <span class="contentB">숙제</span>
                        </div>
                        <div class="homework-item-deadline contents-line">
                            <span class="contentA">Deadline</span>
                            <span class="contentB">2020-10-12 ~ 2020-10-19</span>
                        </div>
                        <div class="homework-item-professor contents-line">
                            <span class="contentA">Professor</span>
                            <span class="contentB">김철수 교수님</span>
                        </div>
                    </div>
                    <div class="homework-item-dDay">D - 1</div>
                </div>
                <div class="homework-item-text">
                    숙제에 대한 숙제
                </div>
            </div>
            <div class="homework-item">
                <div class="homework-item-header">
                    <div class="homework-item-contents">
                        <div class="homework-item-title contents-line">
                            <span class="contentA">Title</span>
                            <span class="contentB">숙제</span>
                        </div>
                        <div class="homework-item-deadline contents-line">
                            <span class="contentA">Deadline</span>
                            <span class="contentB">2020-10-12 ~ 2020-10-19</span>
                        </div>
                        <div class="homework-item-professor contents-line">
                            <span class="contentA">Professor</span>
                            <span class="contentB">김철수 교수님</span>
                        </div>
                    </div>
                    <div class="homework-item-dDay">D - 1</div>
                </div>
                <div class="homework-item-text">
                    숙제에 대한 숙제
                </div>
            </div>
            <div class="homework-item3">
                <div class="homework-item-header">
                    <div class="homework-item-contents">
                        <div class="homework-item-title contents-line">
                            <span class="contentA">Title</span>
                            <span class="contentB">숙제</span>
                        </div>
                        <div class="homework-item-deadline contents-line">
                            <span class="contentA">Deadline</span>
                            <span class="contentB">2020-10-12 ~ 2020-10-19</span>
                        </div>
                        <div class="homework-item-professor contents-line">
                            <span class="contentA">Professor</span>
                            <span class="contentB">김철수 교수님</span>
                        </div>
                    </div>
                    <div class="homework-item-dDay">D - 1</div>
                </div>
                <div class="homework-item-text3">
                    숙제에 대한 숙제
                </div>
            </div>
            <div class="homework-item">
                <div class="homework-item-header">
                    <div class="homework-item-contents">
                        <div class="homework-item-title contents-line">
                            <span class="contentA">Title</span>
                            <span class="contentB">숙제</span>
                        </div>
                        <div class="homework-item-deadline contents-line">
                            <span class="contentA">Deadline</span>
                            <span class="contentB">2020-10-12 ~ 2020-10-19</span>
                        </div>
                        <div class="homework-item-professor contents-line">
                            <span class="contentA">Professor</span>
                            <span class="contentB">김철수 교수님</span>
                        </div>
                    </div>
                    <div class="homework-item-dDay">D - 1</div>
                </div>
                <div class="homework-item-text">
                    숙제에 대한 숙제
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
    .homework-header {
        width: 100%;
        height: 75px;
        margin-top: 40px;
        padding: 0 80px;
        box-sizing: border-box;
    }
    .homework-title {
        height: 35px;
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .homework-header-button {
        height: 30px;
        float: right;
    }
    .homework-header-new {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3f7fdf;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .homework-header-delete {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f65151;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .homework-board {
        width: 100%;
        padding: 0 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .homework-item {
        width: 500px;
        height: 170px;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .homework-item3 {
        width: 500px;
        height: 300px;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #24b6ba;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .homework-item-header {
        display: flex;
        justify-content: space-between;
    }
    .contents-line {
        margin-bottom: 10px;
    }
    .contentA {
        margin-right: 15px;
        font-size: 16px;
        font-weight: bold;
        color: #555555;
    }
    .contentB {
        font-size: 16px;
        font-weight: normal;
        color: #909090;
    }
    .homework-item-dDay {
        width: 60px;
        height: 25px;
        padding: 3px 0;
        border-radius: 20px;
        background-color: #24b6ba;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
        box-sizing: border-box;
    }
    .homework-item-text {
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #f3f3f3;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 600;
        color: #909090;
    }
    .homework-item-text3 {
        width: 100%;
        height: 170px;
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #f3f3f3;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 600;
        color: #909090;
    }
</style>
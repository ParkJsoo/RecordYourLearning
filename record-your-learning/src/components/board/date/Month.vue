<template>
    <div id="month">
        <!-- <div class="month-header">
            <div class="month-title">Month</div>
            <div class="month-header-button">
                <button class="month-header-new">NEW</button>
                <button class="month-header-delete">DELETE</button>
            </div>
        </div> -->
        <div class="month-board">
            <div class="calendar-wrap">
                <!-- <div class="calendar-header">
                    <i class="fas fa-chevron-left"></i>
                    <div class="calendar-title">NOV 2020</div>
                    <i class="fas fa-chevron-right"></i>
                </div> -->
                <month-calendar></month-calendar>
            </div>
        </div>
    </div>
</template>

<script>
import MonthCalendar from './MonthCalendar.vue'

export default {
    components: {
        'MonthCalendar' : MonthCalendar
    }
}
</script>

<style scoped>
    #month {
        width: 100%;
        height: 100%;
    }
    /* .month-header {
        width: 100%;
        height: 75px;
        padding: 50px 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .month-title {
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .month-header-new {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3f7fdf;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    }
    .month-header-delete {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f65151;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
    } */
    .month-board {
        width: 100%;
        height: 100%;
        padding-top: 50px;
    }
    .calendar-wrap {
        width: 90%;
        height: 80%;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
    }
    .calendar-header {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px 8px 0 0;
        background-image: linear-gradient(to right, #3ecace, #07a8ac 98%);
        font-size: 20px;
        font-weight: 600;
        color: #fff;
    }
    .calendar-title {
        margin: 0 100px;
    }
    /* .calendar-body {
        width: 100%;
        height: 80%;
    }
    table {
        width: 100%;
        height: 100%;
    }
    th {
        height: 50px;
        font-size: 16px;
        font-weight: 600;
        color: #24b6ba;
        vertical-align: middle;
    }
    td {
        height: 59px;
        padding: 10px;
        border-top: solid 1px #d6d6d6;
        border-right: solid 1px #d6d6d6;
        font-size: 15px;
        font-weight: 600;
        color: #555555;
        text-align: right;
    } */
</style>
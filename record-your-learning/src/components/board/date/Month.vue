<template>
    <div id="month">
        <div class="month-header">
            <div class="month-title">Month</div>
            <div class="month-header-button">
                <button class="month-header-new">NEW</button>
                <button class="month-header-delete">DELETE</button>
            </div>
        </div>
        <div class="month-board">
            <div class="month-calendar">
                <div class="calendar-header">
                    <i class="fas fa-chevron-left"></i>
                    <div class="calendar-title">NOV 2020</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="calendar-body">
                    <table>
                        <thead>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
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
    #month {
        width: 100%;
        height: 100%;
    }
    .month-header {
        width: 100%;
        height: 75px;
        margin-top: 40px;
        padding: 0 80px;
        box-sizing: border-box;
    }
    .month-title {
        height: 35px;
        font-size: 30px;
        font-weight: 600;
        color: #24b6ba;
    }
    .month-header-button {
        height: 30px;
        float: right;
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
    }
    .month-board {
        width: 100%;
        height: 100%;
    }
    .month-calendar {
        width: 90%;
        height: 70%;
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
    .calendar-body {
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
        color: #555555;
        text-align: right;
    }
</style>
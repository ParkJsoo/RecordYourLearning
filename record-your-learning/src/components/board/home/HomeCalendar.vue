<template>
  <div id="homeCalendar">
    <div class="homeCalendar-header">
      <i class="fas fa-chevron-left"></i>
      <div class="homeCalendar-title">NOV 2020</div>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="homeCalendar-body">
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
            <td class="today">22</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #homeCalendar {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
  }
  .homeCalendar-header {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(to right, #3ecace, #07a8ac 98%);
    border-radius: 8px 8px 0 0;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
  .homeCalendar-body {
    width: 100%;
    height: 80%;
    padding: 10px;
    box-sizing: border-box;
  }
  table {
    width: 100%;
    height: 100%;
    text-align: center;
    border-collapse: separate;
    border-spacing: 15px 0;
  }
  thead {
    font-size: 14px;
    font-weight: 600;
    color: #24b6ba;
  }
  tbody {
    font-size: 14px;
    color: #707070;
  }
  th, td {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .today {
    border-radius: 15px;
    background-color: #24b6ba;
    color: #fff;
  }
  .calendarEvent {
    display: inline;
    border-radius: 16px;
    background-color: rgba(36, 182, 186, 0.14);
  }
</style>
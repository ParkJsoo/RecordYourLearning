<template>
    <div id="board-home">
        <div class="home-sectionA">
            <home-today class="home-sectionA_1"></home-today>
            <div class="home-sectionA_2">
                <home-homework></home-homework>
                <home-graph></home-graph>
            </div>
        </div>
        <div class="home-sectionB">
            <div class="home-sectionB_1">
                <doughnut-chartA class="canvas"></doughnut-chartA>
                <span class="doughnut_text">33%</span>
            </div>
            <div class="home-sectionB_1">
                <doughnut-chartB class="canvas"></doughnut-chartB>
                <span class="doughnut_text">50%</span>
            </div>
            <div class="home-sectionB_1">
                <doughnut-chartC class="canvas"></doughnut-chartC>
                <span class="doughnut_text">85%</span>
            </div>
            <div class="home-sectionB_2">
                <home-calendar></home-calendar>
            </div>
        </div>
    </div>
</template>

<script>
import HomeToday from './home/HomeToday.vue'
import HomeHomework from './home/HomeHomework.vue'
import HomeGraph from './home/HomeGraph.vue'
import DoughnutChartA from './home/DoughnutChartA'
import DoughnutChartB from './home/DoughnutChartB'
import DoughnutChartC from './home/DoughnutChartC'
import HomeCalendar from './home/HomeCalendar'

export default {
    components: {
        'HomeToday': HomeToday,
        'HomeHomework': HomeHomework,
        'HomeGraph': HomeGraph,
        'DoughnutChartA': DoughnutChartA,
        'DoughnutChartB': DoughnutChartB,
        'DoughnutChartC': DoughnutChartC,
        'HomeCalendar': HomeCalendar,
    }
}
</script>

<style scoped>
    #board-home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .home-sectionA {
        width: 95%;
        height: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .home-sectionA_1 {
        width: 60%;
        height: 80%;
    }
    .home-sectionA_2 {
        width: 35%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .home-sectionB {
        width: 95%;
        height: 40%;
        display: flex;
        justify-content: space-around;
    }
    .home-sectionB_1 {
        width: 18.2%;
        height: 250px;
        padding: 35px 0;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .home-sectionB_2 {
        width: 35%;
        height: 250px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
    }
    .canvas {
        height: 200px;
    }
    .doughnut_text {
        position: relative;
        top: -77%;
        left: 37%;
        font-size: 30px;
        color: #909090;
    }
</style>
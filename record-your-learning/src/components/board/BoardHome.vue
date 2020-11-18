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
            </div>
            <div class="home-sectionB_1">
                <doughnut-chartB class="canvas"></doughnut-chartB>
            </div>
            <div class="home-sectionB_1">
                <doughnut-chartC class="canvas"></doughnut-chartC>
            </div>
            <div class="home-sectionB_2"></div>
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

export default {
    components: {
        'HomeToday': HomeToday,
        'HomeHomework': HomeHomework,
        'HomeGraph': HomeGraph,
        'DoughnutChartA': DoughnutChartA,
        'DoughnutChartB': DoughnutChartB,
        'DoughnutChartC': DoughnutChartC,
    }
}
</script>

<style scoped>
    #board-home {
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
    }
    .home-sectionA {
        height: 50%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }
    .home-sectionA_1 {
        width: 60%;
    }
    .home-sectionA_2 {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .home-sectionB {
        width: 100%;
        height: 50%;
        display: flex;
    }
    .home-sectionB_1 {
        width: 18.2%;
        height: 250px;
        margin: 0 auto;
        padding: 35px 0;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .home-sectionB_2 {
        width: 35%;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
        border: solid 1px #d6d6d6;
        background-color: #ffffff;
    }
    .canvas {
        height: 200px;
    }
</style>
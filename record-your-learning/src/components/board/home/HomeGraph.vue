<template>
    <div id="home-graph">
      <line-chart class="canvas"></line-chart>
    </div>
</template>

<script>
import {Line} from 'vue-chartjs'
import LineChart from './LineChart'

export default {
  extends: Line,
  components: {
    'LineChart': LineChart
  },
}
</script>

<style scoped>
  #home-graph {
    width: 550px;
    height: 245px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  .canvas {
    height: 200px;
  }
</style>
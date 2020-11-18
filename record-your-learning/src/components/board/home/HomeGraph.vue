<template>
    <div id="home-graph">
      <line-chart class="canvas"></line-chart>
    </div>
</template>

<script>
import LineChart from './LineChart'

export default {
  components: {
    'LineChart': LineChart
  },
}
</script>

<style scoped>
  #home-graph {
    width: 100%;
    height: 150px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(66, 66, 66, 0.16);
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  .canvas {
    height: 120px;
  }
</style>
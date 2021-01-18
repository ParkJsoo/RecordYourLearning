<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data () {
        return {
            chartData: {
            labels: ["fail", "success"],
            datasets: [{
                borderWidth: 3,
                borderColor: [
                '#efefef',
                '#ef6fac'               
                ],
                backgroundColor: [
                '#fff',
                '#ef6fac'              
                ],
                data: [67, 33]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Month',
                    position: 'bottom',
                    fontSize: 20,
                    fontStyle: 'normal'
                    },
                cutoutPercentage: 80,
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
}
</script>

<style>

</style>
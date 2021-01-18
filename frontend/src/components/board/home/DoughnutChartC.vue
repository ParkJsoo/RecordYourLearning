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
                '#66ba3f'               
                ],
                backgroundColor: [
                '#fff',
                '#66ba3f'              
                ],
                data: [15, 85]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Day',
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
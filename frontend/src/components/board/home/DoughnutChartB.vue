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
                '#ffa527'               
                ],
                backgroundColor: [
                '#fff',
                '#ffa527'              
                ],
                data: [50, 50]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Week',
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
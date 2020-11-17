<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
    data () {
      return {
        gradient: null,
        // datacollection: {
        //     labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'], 
        //     datasets: [
        //         {
        //             backgroundColor: this.gradient,
        //             pointBackgroundColor: '#24b6ba',
        //             borderWidth: 2,
        //             borderColor: "#24b6ba",
        //             data: [35, 55, 75, 50, 55]
        //         }
        //     ]
        // },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        stepSize: 20,
                    },
                    gridLines: {
                        display: true,
                        zeroLineColor: "#24b6ba",
                        zeroLineWidth: 2,
                    }
                }],
                xAxes: [ {
                    ticks:{
						fontColor : "#707070",
                        fontSize : 14,
					},
                    gridLines: {
                        display: false,
                    }
                }]
            },
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false
            }
        }
    },
    mounted () {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

        this.gradient.addColorStop(0, 'rgba(36, 182, 186, 0.3)')
        this.gradient.addColorStop(0.5, 'rgba(18, 91, 93, 0)')
        this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        this.renderChart({
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'], 
            datasets: [
                {
                    backgroundColor: this.gradient,
                    pointBackgroundColor: '#24b6ba',
                    borderWidth: 2,
                    borderColor: "#24b6ba",
                    data: [35, 55, 75, 50, 55],
                }
            ]
        }, this.options)
    }
}
</script>


<style>

</style>
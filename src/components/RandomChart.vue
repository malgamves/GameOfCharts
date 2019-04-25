<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
     <line-chart :chartdata="chartData" :options="chartOptions"/>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}

</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>

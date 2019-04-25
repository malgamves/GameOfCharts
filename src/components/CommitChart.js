// CommitChart.js
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins


export default {
  extends: Bar,
  mixins: [reactiveProp],
  type: 'horizontalBar',
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}

/*
export default {
  extends: Bar,
  type: 'horizontalBar',
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
}),
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Votes',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 28, 40, 20, 12, 11]
        }
      ]
    })
  }
}
*/

/* 
export default {
  extends: Bar,
  type: 'horizontalBar',
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata)
  }
}
*/
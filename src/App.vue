<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="column">
          <ul v-for="charName of characters" 
          v-bind:key="charName.id">
          <button @click="updateVotes(charName.id)">{{charName.name}}
            </button>
          </ul>
        </div>
        <div class="column chart">
          <h2>Who Might Die ⚔️</h2>
          <commit-chart 
          v-if="loaded"
          :chartData="chartData" />
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommitChart from './components/CommitChart.js'
import { ALL_CHAR_QUERY, ADD_VOTE_MUTATION, ALL_VOTES_SUBSCRIPTION } from './constants/graphql'
import graphql2chartjs from 'graphql2chartjs';

export default {
  name: 'app',
  props: {
    msg: String,
  },
  data(){
    return {
      loaded: false,
      characters: '',
      chartData: null,
      options: {
            responsive: true,
            maintainAspectRatio: false
                },
      //_id: '',
    }
  },
  components: {
    CommitChart
  },
  methods: {
    updateVotes(id){
      this.$apollo.mutate({

        mutation: ADD_VOTE_MUTATION,

        variables: {
          id: id,
        }
      });
    }
  },
  apollo: {
      characters: {
        query: ALL_CHAR_QUERY
      },
      $subscribe: {
        votes: {
          query: ALL_VOTES_SUBSCRIPTION,
          result({data}) {
            const g2c = new graphql2chartjs();
            g2c.add(data, 'bar')
            this.chartData = g2c.data
            this.loaded = true
            console.log(g2c.data)
          }
        }
      },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin:  0 auto;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}

.chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    float: right;
  }
</style>


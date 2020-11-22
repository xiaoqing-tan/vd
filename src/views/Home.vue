<template>
  <div class="home">
    <div class="charts">
      <div ref="chart" class="block chart">
        <h1>Hello World...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
import macarons from './../themes/macarons.js';

export default {
  data() {
    return {
      sale: null
    }
  },
  mounted() {
    this.initChart();
     window.addEventListener('resize', this.resize, false)
  },
  beforeDestroy() {
     window.removeEventListener('resize', this.resize, false)
  },
  methods: {
    resize() {
      this.$nextTick(() => {
        this.sale.resize();
      })       
    },
    initChart() {
      echarts.registerTheme('macarons', macarons)
      this.sale = echarts.init(this.$refs['chart'], 'macarons');
      this.sale.setOption({
        title: {
          text: '销量',
        },
        tooltip: {},
        xAxis: {
            data: ['01-01', '02-01', '03-01', '04-01', '05-01', '06-01']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style lang="less">
  .home {

  }
  .charts {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .chart {
      width: 33.333%;
      height: 250px;
    }
  }
  .block {
    border-radius: 0;
    background-color: #fff;
    box-shadow: 1px 1px 6px rgba(129, 129, 129, 0.1);
    padding: 20px;
    border-radius: 5px;
  }
  .button {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    background-color: rgb(7, 137, 243) ;
    &.red {
      background-color: rgb(247, 172, 12) ;
    }
  }
</style>
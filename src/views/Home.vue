<template>
  <div>
    <div ref="chart" class="block chart">
      <h1>Hello World...</h1>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
import macarons from './../themes/macarons.js';

export default {
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart() {
      echarts.registerTheme('macarons', macarons)
      const myChart = echarts.init(this.$refs['chart'], 'macarons');
      myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style lang="less">
  .chart {
    height: 400px;
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
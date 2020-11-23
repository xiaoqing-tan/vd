<template>
  <div class="home">
    <h2>概览</h2>
    <div class="summary">
      <div class="item block">
        <p>当日</p>
        <p style="color: #16c516">265</p>
      </div>
      <div class="item block">
        <p>本周</p>
        <p style="color: #fb4223">265</p>
      </div>
      <div class="item block">
        <p>本月</p>
        <p style="color: #09b6fb">265</p>
      </div>
    </div>
    <h2>统计</h2>   
    <div class="charts">
      <div ref="chart" class="block chart">
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
    h2 {
      color: #333;
    }
  }
  .summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .item {
      width: 32.333%;
      box-sizing: border-box;
      p {
        margin: 0;
        &:first-child {
          font-size: 16px;
          color: #ccc;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &:last-child {
          font-size: 40px;
          color: #333;
          font-weight: bold;
          &::after {
            content: '次';
            color: #ccc;
            font-size: 16px;
            padding: 0 5px;
          }
        }
      }
    }
  }
  .charts {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .chart {
      width: 100%;
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
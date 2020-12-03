<template>
  <div class="home">
    <h2>概览</h2>
    <div class="summary">
        <el-row :gutter="20">
          <el-col :sm="12" :xs="24" :md="8" :span="8">
            <div class="item block">
              <p>日均销售额</p>
              <p><span>265</span><span>同比-34%</span></p>
            </div>
          </el-col>
          <el-col :sm="12" :xs="24" :md="8" :span="8">
            <div class="item block">
              <p>日均访问量</p>
              <p><span>265</span><span>同比+34%</span></p>
            </div>
          </el-col>
          <el-col :sm="12" :xs="24" :md="8" :span="8">
            <div class="item block">
              <p>转化率</p>
              <p><span>265</span><span>同比+21%</span></p>
            </div>
          </el-col>
        </el-row>
    </div>
    <h2>统计</h2>   
    <div class="charts">
      <el-row :gutter="20">
        <el-col :sm="16" :xs="24" :md="16" :span="16">
          <div ref="chart" class="chart"></div>
        </el-col>
        <el-col :sm="8" :xs="24" :md="8" :span="8">
          <div class="chart"></div>
        </el-col>
      </el-row>
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
      font-size: 18px;
    }
  }
  .summary {
    .item {
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 1px 1px 3px rgba(180, 179, 179, 0.1);
      padding: 30px;
      border-radius: 4px;
      margin-bottom: 20px;
      &:hover {
        background-color: #f9f9f9 ;
        transition: all .3s ease;
      }
      p {
        margin: 0;
        color: #999;
        &:first-child {
          font-size: 16px;
          margin-bottom: 20px;
        }
        &:last-child {
          font-size: 30px;
          font-weight: bold;
          color: #666;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: normal;
          span {
            &:first-child {
              &::after {
                content: '次';
                color: #666;
                font-size: 14px;
                font-weight: normal;
                padding: 0 5px;
              }
            }
            &:last-child {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .charts {
    .chart {
      width: 100%;
      height: 250px;
    box-sizing: border-box;
      background-color: #fff;
      box-shadow: 1px 1px 3px rgba(180, 179, 179, 0.1);
      padding: 30px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }



</style>
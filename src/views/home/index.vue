<template>
  <div class="home">
    <el-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    />
    <h2>概览</h2>
    <div class="summary">
      <el-row :gutter="20">
        <el-col :sm="12" :xs="24" :md="8" :span="8">
          <div class="item">
            <p>日均销售额</p>
            <p><span>265</span><span>同比-34%</span></p>
          </div>
        </el-col>
        <el-col :sm="12" :xs="24" :md="8" :span="8">
          <div class="item">
            <p>日均访问量</p>
            <p><span>265</span><span>同比+34%</span></p>
          </div>
        </el-col>
        <el-col :sm="12" :xs="24" :md="8" :span="8">
          <div class="item">
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
          <div class="block">
            <ve-histogram :data="histogramChartData" />
          </div>
        </el-col>
        <el-col :sm="8" :xs="24" :md="8" :span="8">
          <div class="block">
            <ve-pie :data="pieChartData" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      histogramChartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 990 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 700 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 3000 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 1200 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 2223 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 878 }
        ]
      },
      pieChartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
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
        // background-color: #f5f5f5 ;
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
</style>

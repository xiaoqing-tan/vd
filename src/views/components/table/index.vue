<template>
  <div>
    <div class="block">

      <div class="table">
        <el-table
          border
          stripe
          v-loading="loading"
          size="medium"
          :data="tableData"
          style="width: 100%; border-radius: 5px;">
          <el-table-column 
            v-for="item in config.columns" 
            :key="item.prop" 
            :prop="item.prop" 
            :label="item.label"
            :width="item.width"
            :formatter="item.formatter"
            >
          </el-table-column>
        </el-table>
      </div>

      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        columns: [{
          label: '地址',
          prop: 'address',
        },
        {
          label: '姓名',
          prop: 'name',
        },
        {
          label: '地址',
          prop: 'date',
        },
        {
          label: '操作',
          prop: 'action',
        }]
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      loading: false
    }
  },
  async created() {
    this.loading = true;
    await this.$sleep(1000);
    this.loading = false;
  },
  methods: {
    handleCurrentChange(val) {
       console.log(`第 ${val} 页`);
    }
  }
}
</script>

<style lang="less">
  .table {
    margin-bottom: 20px;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
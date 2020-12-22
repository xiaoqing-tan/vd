<template>
  <div>
    <div class="block">
      <h2>Table</h2>
      <Table :loading="loading" :config="config">
        <template slot-scope="scope" slot="action">
          <div class="vd-table__action">
            <a @click="onEdit(scope)" href="#">编辑</a>
            <a @click="onDel(scope)" href="#">删除</a>
          </div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Table from './../../../components/Table';
export default {
  components: { 
    Table
  },
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
          slot: true
        }],
        dataSource: [{
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
      },
      loading: false
    }
  },
  async created() {
    this.loading = true;
    await this.$sleep(1000);
    this.loading = false;
  },
  methods: {
    onEdit({ row }) {
      console.log(row)
    },
    onDel({ row }) {
      console.log(row)
    }
  }
}
</script>

<style lang="less">
  
</style>
<template>
  <div>
    <vd-breadcrumb />
    <div class="block">
      <h2>表格</h2>
      <vd-table :loading="loading" v-on:load-data="loadData" :config="config">
        <template slot-scope="scope" slot="action">
          <div class="vd-table__action">
            <span @click="onEdit(scope)">编辑</span>
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              @confirm="onDel(scope)"
            >
              <span slot="reference">删除</span>
            </el-popconfirm>
          </div>
        </template>
      </vd-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      config: {
        columns: [
          {
            label: "地址",
            prop: "address",
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "性别",
            prop: "gender",
            formatter: ({ gender }) => {
              return gender === 1 ? "男" : "女";
            },
          },
          {
            label: "地址",
            prop: "date",
          },
          {
            label: "操作",
            prop: "action",
            slot: true,
          },
        ],
        dataSource: [
          {
            id: 1,
            date: "2016-05-02",
            name: "王小虎",
            gender: 1,
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            id: 2,
            date: "2016-05-04",
            name: "王小虎",
            gender: 2,
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            id: 3,
            date: "2016-05-01",
            name: "王小虎",
            gender: 1,
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 4,
            date: "2016-05-03",
            name: "王小虎",
            gender: 1,
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      },
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    await this.$sleep(200);
    this.loading = false;
  },
  methods: {
    onEdit({ row }) {
      console.log(row);
    },
    async onDel({ row }) {
      this.loading = true;
      this.config.dataSource = this.config.dataSource.filter(i => i.id !== row.id);
      await this.$sleep(200);
      this.loading = false;
    },
    async loadData(val) {
      console.log(`第 ${val} 页!`);
      this.loading = true;
      await this.$sleep(200);
      this.loading = false;
    }
  },
};
</script>

<style lang="less">
</style>
<template>
  <div class="vd-table">
    <div class="vd-table__content">
      <el-table
        border
        stripe
        v-loading="loading"
        size="medium"
        :data="config.dataSource"
        style="width: 100%; border-radius: 5px"
      >
        <el-table-column
          v-for="item in config.columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter"
        >
          <template slot-scope="scope">
            <slot v-if="item.slot" :name="item.prop" :row='scope.row'></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="vd-table__pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCurrentChange(val) {
       console.log(`第 ${val} 页`);
    }
  }
};
</script>

<style lang="less">
.vd-table {
  &__action {
    display: inline;
    a {
      color: rgb(2, 125, 240);
      text-decoration: none;
      margin: 0 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__content {
    margin-bottom: 20px;
  }
  &__pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
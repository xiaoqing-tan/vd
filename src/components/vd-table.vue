<template>
  <div class="vd-table">
    <div class="vd-table__content">
      <el-table
        border
        stripe
        v-loading="loading"
        size="medium"
        :data="config.dataSource"
        style="width: 100%; border-radius: 3px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"></el-table-column>
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
            <span v-else>{{ item.formatter ? item.formatter(scope.row, item) : scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="vd-table__pagination" :class="{'vd-table__pagination-mobile': isMobile}">
      <el-pagination
        :background="!isMobile"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000"
        :small="isMobile"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vd-table',
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
  computed: {
    isMobile() {
      const { config: { isMobile } } = this.$store.state;
      return isMobile;
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('load-data', val);
    },
    handleSelectionChange(val) {
      this.$emit('on-select', val);
    }
  }
};
</script>

<style lang="less">
.vd-table {
  &__action {
    display: inline;
    span {
      color: rgb(2, 125, 240);
      text-decoration: none;
      margin: 0 3px;
      cursor: pointer;
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
    &-mobile {
      justify-content: center;
    }
  }
}
</style>
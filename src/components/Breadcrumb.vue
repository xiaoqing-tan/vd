<template>
  <div class="vd-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in menu" :key="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      const { matched } = this.$route;
      return matched.slice(1,3);
    }
  },
  methods: {

  }
}
</script>


<style lang="less">
  .vd-breadcrumb {
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
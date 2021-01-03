<template>
  <div class="vd-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.menu)
  },
  computed: {
    menu() {
      return this.$store.state.userData.menu;
    },
    // arrs() {
    //   const { menu } = this.$store.state.userData;
    //   const arrs = [];
    // }
  }
}
</script>


<style lang="less">
  .vd-breadcrumb {
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
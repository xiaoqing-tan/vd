<template>
  <div class="blank">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu" />
        <template slot="title"><span>导航二</span><em class="alert">{{ count }}</em></template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1',
      timer: null,
      count: 0
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    getData() {
      this.timer = setInterval(() => {
        if (this.count > 9) {
          this.count = 0
        } else {
          this.count++
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  .alert {
    position: absolute;
    right: 0;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: red;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-style: normal;
  }
</style>

<template>
  <div class="topbar">
    <p>
      <i class="sidebar-switch" :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold' }`" @click="onToggleSidebar" />
    </p>
    <vd-nav v-if="mode === 'horizontal'" :is-collapse="isCollapse" :mode="mode" />
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ userData.username }} <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="/setting">个人信息</el-dropdown-item>
        <el-dropdown-item command="/login">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$router.replace('/login')
    },
    onToggleSidebar() {
      if (this.isMobile) {
        return this.$message('移动端无法展开侧边栏!')
      }
      this.isCollapse = !this.isCollapse
    },
    handleCommand(path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="less">

</style>

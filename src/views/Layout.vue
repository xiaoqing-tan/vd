<template>
  <div class="main">
    <Sidebar :isCollapse="isCollapse" />
    <div class="page" :class="{'active': !isCollapse}" >
      <div class="topbar">
        <p>
          <i @click="isCollapse = !isCollapse" class="sidebar-switch" :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold' }`"></i>
        </p>

        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{user.username}} <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/setting">个人信息</el-dropdown-item>
            <el-dropdown-item command="/login">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import Sidebar from './../components/Sidebar';

export default {
  data() {
    return {
      isCollapse: false,
      user: {}
    }
  },
  created() {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
  },
  components: {
    Sidebar
  },
  methods: {
    onLogout() {
      window.localStorage.setItem('user', '');
      window.localStorage.setItem('status', '0');
      this.$router.replace('/login');
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
  .topbar {
    height: 60px;
    line-height: 60px;
    color: #666;
    background: #fff;
    padding: 0 20px;
    box-shadow: 1px 1px 6px rgba(129, 129, 129, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    p {
      span {
        margin: 0 5px;
      }
    }
    .sidebar-switch {
      cursor: pointer;
      font-size: 18px;
    }
  }
  .view {
    padding: 20px;
  }
</style>
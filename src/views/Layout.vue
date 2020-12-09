<template>
  <div class="main">
    <Sidebar :isCollapse="isCollapse" />
    <div class="page" :class="{'active': !isCollapse}" >
      <div class="topbar">
        <p>
          <i @click="onToggleSidebar" class="sidebar-switch" :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold' }`"></i>
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
      <transition name="slide-fade">
      <router-view class="view" />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from './../components/Sidebar';
const isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);

export default {
  data() {
    return {
      isCollapse: isMobile,
      user: {},
      isMobile
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
    onToggleSidebar() {
      if (this.isMobile) {
        return this.$toast('移动端无法展开侧边栏!');
      }
      this.isCollapse = !this.isCollapse;
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
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    // transition: all .3s ease;
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  // .slide-fade-leave-active {
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
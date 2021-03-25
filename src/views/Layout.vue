<template>
  <div class="main" :class="{'horizontal': mode === 'horizontal'}">
    <div class="topbar">
      <h1 :class="{'is-close': isCollapse}"><router-link to="/">{{ siteName }}</router-link></h1>
      <div v-if="mode === 'vertical'" class="collapse">
        <i
          class="sidebar-switch"
          :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold' }`"
          @click="onToggleSidebar"
        />
      </div>
      <vd-nav v-if="mode === 'horizontal'" :is-collapse="isCollapse" :mode="mode" />
      <div class="topbar__setting">
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
    </div>
    <vd-sidebar v-if="mode === 'vertical'" :mode="mode" :is-collapse="isCollapse" />
    <div class="page" :class="{'active': !isCollapse}">
      <transition name="slide-fade">
        <router-view class="view" />
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isCollapse: true
    }
  },
  computed: {
    siteName() {
      return this.isCollapse ? 'VD' : 'VUE DASHBOARD'
    },
    userData() {
      const { userData } = this.$store.state
      return userData
    },
    isMobile() {
      const { config: { isMobile }} = this.$store.state
      return isMobile
    },
    mode() {
      const { config: { mode }} = this.$store.state
      return mode
    }
  },
  created() {
    this.isCollapse = this.isMobile
  },
  methods: {
    onLogout() {
      this.$router.replace('/login')
    },
    onToggleSidebar() {
      if (!this.isMobile) {
        this.isCollapse = !this.isCollapse
      }
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
    box-shadow: 1px 1px 6px rgba(129, 129, 129, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    position: fixed;
    top: 0;
    z-index: 10;
    &__setting {
      padding: 0 20px;
    }
    h1 {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      width: 250px;
      text-align: center;
      background-color: #0d2755 ;
      color: #fff;
      margin: 0;
      transition: all .2s ease-in-out;
      &.is-close {
        width: 64px;
        transition: all .2s ease-in-out;
      }
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #b3b3b6;
        }
      }
    }

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

  .page {
    margin-left: 64px;
    transition: all .2s ease-in-out;
    overflow: hidden;
    &.active {
      margin-left: 250px;
      transition: all .2s ease-in-out;
    }
  }

  .main {
    .collapse {
      flex: 1;
      padding: 0 20px;
    }
    &.horizontal {
      h1 {
        background-color: #fff ;
        a {
          color: #0d2755;
        }
      }
      .vd-nav {
        width: 100%;
        position: static;
        display: flex;
        justify-content: center;
      }
      .page {
        margin-left: 0;
      }
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

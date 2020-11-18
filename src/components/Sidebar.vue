<template>
  <div class="sidebar" :class="{'is-close': isCollapse}">
    <h1><router-link to="/">{{ siteName }}</router-link></h1>
    <el-menu 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="onOpen" 
      @close="onClose"
      background-color="#0d2755"
      text-color="#fff"
      router
      :collapse-transition="false"
      :collapse="isCollapse">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="item in menus" :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :key="childItem.path" :index="childItem.path">
          <i :class="childItem.icon"></i>
          <span slot="title">{{childItem.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    siteName() {
      return this.isCollapse ? 'VD' : 'VUE DASHBOARD'
    }
  },
  data() {
    return {
      menus: [
        {
          name: '组件',
          icon: 'el-icon-coin',
          path: '/components',
          children: [
            {
              name: '表单',
              icon: 'el-icon-bank-card',
              path: '/components/form'
            },
            {
              name: '图表',
              icon: 'el-icon-pie-chart',
              path: '/components/charts'
            },
            {
              name: '表格',
              icon: 'el-icon-s-grid',
              path: '/components/table'
            }
          ]
        },
        {
          name: '设置',
          icon: 'el-icon-setting',
          path: '/setting',
          children: [
            {
              name: '个人信息',
              icon: 'setting',
              path: '/setting'
            },
          ]
        }
      ]
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onOpen() {

    },
    onClose() {

    }
  }
}
</script>

<style lang="less">
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #0d2755;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all .2s ease-in-out;
  h1 {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #b3b3b6;
      }
    }
  }
  .el-menu {
    border-right: 0 none;
    height: calc(100% - 50px);
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 17px;
      height: 17px;
      background-color: transparent;
      border-radius: 9px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #40425a;
      border-radius: 9px;
      background-clip: content-box;
      border: 5px solid transparent;
    }
    i {
      &.el-icon-folder {
        font-size: 18px;
        margin-right: 3px;
      }
      &.el-icon-tickets {
        font-size: 16px;
        margin-right: 0;
      }
    }
  }
   &.is-close {
    width: 64px;
    transition: all .2s ease-in-out;
    .logo {
      img {
        margin-right: 0;
      }
      a {
        padding: 0;
      }
    }
  }
}


</style>

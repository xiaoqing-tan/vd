<template>
  <div class="vd-nav">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :background-color="backgroundColor"
      :text-color="textColor"
      :mode="mode"
      unique-opened
      router
      :collapse-transition="false"
      :collapse="isCollapse"
      @open="onOpen"
      @close="onClose"
    >
      <el-menu-item v-for="topItem in menu.top" :key="topItem.path" :index="topItem.path || '/'">
        <i :class="topItem.icon" />
        <span slot="title">{{ topItem.name }}</span>
      </el-menu-item>
      <el-submenu v-for="item in menu.main" :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="item.icon" />
          <span slot="title">{{ item.name }}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :key="childItem.path" :index="childItem.path">
          <i :class="childItem.icon" />
          <span slot="title">{{ childItem.name }}</span>
        </el-menu-item>
        <el-menu-item v-for="bottomItem in menu.bottom" :key="bottomItem.path" :index="bottomItem.path">
          <i :class="bottomItem.icon" />
          <span slot="title">{{ bottomItem.name }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    backgroundColor() {
      return this.mode === 'vertical' ? '#0d2755' : '#fff'
    },
    textColor() {
      return this.mode === 'vertical' ? '#fff' : '#0d2755'
    },
    defaultActive() {
      return this.$route.path
    },
    menu() {
      const { userData: { menu }} = this.$store.state
      const top = menu[0].children.filter(i => !i.children && i.type === 'top')
      const main = menu[0].children.filter(i => i.children)
      const bottom = menu[0].children.filter(i => !i.children && i.type === 'bottom')
      return {
        top,
        main,
        bottom
      }
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
  .vd-nav {
    &>.el-menu {
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
  }
</style>

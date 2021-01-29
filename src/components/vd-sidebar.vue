<template>
  <div class="vd-sidebar" :class="{'is-close': isCollapse}">
    <h1><router-link to="/">{{ siteName }}</router-link></h1>
    <vd-nav :isCollapse="isCollapse" :mode="mode" />
  </div>
</template>

<script>
export default {
  name: 'vd-sidebar',
  computed: {
    siteName() {
      return this.isCollapse ? 'VD' : 'VUE DASHBOARD'
    }
  },
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.vd-sidebar {
  width: 250px;
  height: 100%;
  background-color: #0d2755;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all .2s ease-in-out;
  h1 {
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    margin: 0;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #b3b3b6;
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

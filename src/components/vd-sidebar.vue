<template>
  <div class="vd-sidebar" :class="{'is-close': isCollapse}">
    <vd-nav :isCollapse="isCollapse" :mode="mode" />
  </div>
</template>

<script>
export default {
  name: 'vd-sidebar',
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
  top: 60px;
  z-index: 1000;
  transition: all .2s ease-in-out;
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

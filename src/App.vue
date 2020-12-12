<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  created() {
    window.addEventListener("beforeunload", () => {
      window.localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    });
  }
}
</script>

<style lang='less'>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101F1C, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#101F1C, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(#101F1C, 1);
}
body {
  background-color: #f5f5f5;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>

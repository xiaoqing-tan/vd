<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    window.document.addEventListener('keydown', (event) => {
      console.log(event)
    })
  }
}
</script>

<style lang='less'>
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

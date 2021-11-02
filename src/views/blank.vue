<template>
  <div class="page home">
    <div class="home__container">
      <div class="home__content" @click="onClick">
        <h2>VD</h2>
        <p>一个基于Vue+Element UI的后台管理系统</p>
      </div>
      <div class="home__footer">
        <p><a href="https://beian.miit.gov.cn/">蜀ICP备2020030753号-1</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="less">
.home {
  &__container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  &__content {
    border: #f9f9f9 1px solid;
    padding: 50px 100px;
    border-radius: 20px;
    background-color: #fff;
    text-align: center;
    transition: all .3s ease;
    cursor: pointer;
    h2, p {
      color: rgba(33, 150, 243, .9);
    }
    p {
      font-size: 14px;
    }
    &:hover {
      transition: all .3s ease;
      background-color: rgba(33, 150, 243, .9);
      h2, p {
        color: #fff;
      }
    }
  }
  &__footer {
    position: absolute;
    bottom: 20px;
    font-size: 12px;
    text-align: center;
    a {
      color: #999;
      text-decoration: none;
      transition: all 0.2s ease;
      &:hover {
        color: #25b864;
        text-decoration: underline;
        transition: all 0.2s ease;
      }
    }
  }
}

</style>

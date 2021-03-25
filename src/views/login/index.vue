<template>
  <div class="login" :class="{ 'login-mobile': isMobile }">
    <div class="login__header">
      <h1>VD</h1>
    </div>
    <div class="login__content vd-form">
      <div class="vd-form__header">
        <h2>登录</h2>
        <p>Vue Dashboard 创造不一样的管理系统!</p>
      </div>
      <div class="vd-item">
        <p class="vd-input-element">
          <el-input
            v-model="form.username"
            prefix-icon="el-icon-user"
            placeholder="登录名"
            type="text"
          />
        </p>
      </div>
      <div class="vd-item">
        <p class="vd-input-element">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            type="password"
          />
        </p>
      </div>
      <div class="vd-item">
        <el-button
          :loading="loading"
          type="primary"
          @click="onSubmit"
        >确定</el-button>
      </div>
    </div>
    <div class="login__footer">
      <p>Vue Dashboard &copy; <a href="/">忘记密码?</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  computed: {
    isMobile() {
      const {
        config: { isMobile }
      } = this.$store.state
      return isMobile
    }
  },
  methods: {
    async onSubmit() {
      const {
        query: { redirect }
      } = this.$route
      this.loading = true
      await this.$sleep(2000)
      try {
        await this.$store.dispatch('userLogin', this.form)
        this.$message.success('登录成功')
        this.$router.push({
          path: redirect || '/'
        })
      } catch (error) {
        this.$message.error('登录失败')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8fbfd;
  &.login-mobile {
    padding: 0 10px;
    .vd-form {
      width: 100%;
      border-radius: 5px;
    }
  }
  &__content {
    margin-bottom: 30px;
  }
  &__footer {
    text-align: center;
    p {
      font-size: 14px;
      color: #999;
      margin: 0;
      a {
        text-decoration: none;
        color: #3096f5;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    color: #3096f5;
  }
  .vd-form {
    width: 460px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 50px 55px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #f3f3f3;
    p {
      margin: 0 0 20px;
    }
    &__header {
      text-align: center;
      margin-bottom: 35px;
      h2 {
        font-size: 20px;
        color: #333;
        margin: 0 0 15px;
      }
      p {
        color: #999;
        margin: 0;
        font-size: 14px;
      }
    }
  }

  .vd-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    button {
      width: 100%;
    }
  }

  .vd-label {
    width: 100px;
    text-align: center;
    color: #999;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .vd-input-element {
    flex: 1;
    input[type="text"],
    input[type="password"] {
      width: 100%;
    }
  }

  .v-button {
    padding: 20px 40px;
    border-radius: 35px;
  }

  .vd-button {
    padding: 0 40px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    background-color: rgb(7, 137, 243);
    margin: 0 20px 0 0;
    border: 0 none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &.vd-red {
      background-color: rgb(247, 172, 12);
    }
    &.vd-cancel {
      background-color: rgb(214, 213, 210);
    }
  }
}
</style>

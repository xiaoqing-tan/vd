<template>
  <div class="login">
    <div class="vd-form">
      <h1>Vue Dashboard</h1>
      <div class="vd-item">
        <p class="vd-label">用户名</p>
        <p class="vd-input-element"><input v-model="form.username" type="text" /></p>
      </div>
      <div class="vd-item">
        <p class="vd-label">密码</p>
        <p class="vd-input-element"><input v-model="form.password" type="password" /></p>
      </div>
      <div class="vd-item vd-no-label">
        <el-button @click="onSubmit" round type="primary">确定</el-button>
        <el-button round type="info">取消</el-button>
        <!-- <button @click="onSubmit" class="vd-button">确定</button> -->
        <!-- <button class="vd-button vd-cancel">取消</button> -->
      </div>
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
      }
    }
  },
  created() {
    this.$store.dispatch('setUserInfo', {});
    window.localStorage.setItem('user', null);
  },
  methods: {
    async onSubmit() {
      const { username, password } = this.form;
      try {
        const { user, menu } = await this.$http.post('/login', { username, password });
        console.log(menu)
        this.$store.dispatch('setUserInfo', user);
        this.$store.dispatch('setMenu', menu);
        this.$message.success('登录成功');
        this.$router.replace('/');
      } catch (error) {
        this.$message.error('登录失败');
      }
    }
  }
}
</script>

<style lang="less">
  .login  {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 40px;
    }
    .vd-form {
      width: 500px;
      background-color: #fff;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 50px;
      box-sizing: border-box;
    }

    .vd-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      box-sizing: border-box;
      &.vd-no-label {
        padding-left: 100px;
        justify-content: flex-start;
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
      input[type='text'],
      input[type='password'] {
        border: #f7f7f7 1px solid;
        border-radius: 3px;
        font-size: 14px;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
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
      background-color: rgb(7, 137, 243) ;
      margin: 0 20px 0 0;
      border: 0 none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      &.vd-red {
        background-color: rgb(247, 172, 12) ;
      }
      &.vd-cancel {
        background-color: rgb(214, 213, 210) ;
      }
    }

  }

</style>
<template>
  <div>
    <vd-breadcrumb />
    <div class="block">
      <p>
        <el-radio-group v-model="role">
          <el-radio :label="1">管理员</el-radio>
          <el-radio :label="2">客服</el-radio>
        </el-radio-group>
      </p>
      <p>
        <el-button round type="primary" @click="onSave">确定</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: 1
    }
  },
  created() {
    const { userData: { role }} = this.$store.state
    this.role = role
  },
  methods: {
    onSave() {
      const userData = this.$storage.get('userData')
      this.$storage.set('userData', { ...userData, role: this.role })
      window.location.reload()
    }
  }
}
</script>

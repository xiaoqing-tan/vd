<template>
  <div>
    <vd-breadcrumb />
    <div class="block">
      <h2>Setting</h2>  
      <p>
        <el-radio-group v-model="mode">
          <el-radio label="horizontal">horizontal</el-radio>
          <el-radio label="vertical">vertical</el-radio>
        </el-radio-group>
      </p>
      <p>
        <el-button round @click="onSave" type="primary">确定</el-button>
      </p>
    </div>
  </div>
</template>

<script>  
export default {
  data() {
    return {
      mode: 'horizontal'
    }
  },
  created() {
    const { mode } = this.$store.state.config;
    this.mode = mode;
  },
  methods: {
    onSave() {
      this.$store.dispatch('updateConfig', {
        mode: this.mode
      });
    }
  }
}
</script>

<style lang="less">

</style>
<template>
  <div>
    <vd-breadcrumb />
    <div class="block">
      <h2>Setting</h2>
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
    const { mode } = this.$store.state.config
    this.mode = mode
  },
  methods: {
    onSave() {
      this.$store.dispatch('updateConfig', {
        mode: this.mode
      })
    }
  }
}
</script>

<style lang="less">

</style>

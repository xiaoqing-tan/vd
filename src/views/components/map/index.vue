<template>
  <div>
    <vd-breadcrumb />
    <div class="block">
      <h2>地图</h2>
      <vd-map />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: null
    }
  },
  async created() {
    this.location = await this.$getLocation()
    console.log(this.location)
  },
  methods: {

  }
}
</script>

<style lang="less">

</style>

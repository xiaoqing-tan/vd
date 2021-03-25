<template>
  <div class="vd-map">
    <div class="amap-wrapper">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearch" />
      <el-amap class="amap-box" :center="mapCenter" vid="amap-vue">
        <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" />
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [],
      searchOption: {
        city: '成都',
        citylimit: true
      },
      mapCenter: [104.06667, 30.66667]
    }
  },
  methods: {
    onSearch(pois) {
      let latSum = 0
      let lngSum = 0
      const markers = []
      if (pois.length > 0) {
        pois.forEach(poi => {
          const { lng, lat } = poi
          lngSum += lng
          latSum += lat
          markers.push([poi.lng, poi.lat])
        })
        const center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        this.markers = markers
        this.mapCenter = [center.lng, center.lat]
      }
    }
  }
}
</script>

<style lang="less">
  .vd-map {
    .amap-wrapper {
      width: 100%;
      height: 300px;
      position: relative;
    }
    .amap-box {
      height: 300px;
    }
    .search-box {
      position: absolute;
      top: 10px;
      left: 10px;
      width: calc(100% - 20px);
    }
  }
</style>

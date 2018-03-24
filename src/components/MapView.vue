<template>
  <div id='map-view'></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {epsg3031} from '../data/epsg.js'

export default {
  name: 'MapView',
  props: {
    layer: {
      default: [],
    },
  },
  data: function () {
    return {
      map: null,
    }
  },
  mounted: function () {
    this.map = L.map('map-view', {
      center: [-90, 180],
      zoom: 0,
      maxZoom: 5,
      crs: epsg3031,
    })
  },
  watch: {
    layer (newLayers, oldLayers) {
      if (oldLayers.length < 2) {
        oldLayers = [{options: {}}, {options: {}}]
      }
      let [om, oo] = oldLayers
      let [nm, no] = newLayers
      if (JSON.stringify(nm.options) !== JSON.stringify(om.options)) {
        this.map.removeLayer(om)
        this.map.addLayer(nm)
      }
      this.map.removeLayer(oo)
      this.map.addLayer(no)
    },
  },
}
</script>

<style scoped>
#map-view {
  flex-grow: 1;
}
</style>

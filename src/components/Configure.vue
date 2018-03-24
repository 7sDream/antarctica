<template>
    <div id="configure">
      <label for="mapLayerName">
        Layer
      </label>
      <select name="mapLayerName" id="mapLayerName" v-model="layerIndex">
        <option v-for="(layer, index) in layers" :key="layer.layer" :value="index">{{layer.layer}}</option>
      </select>
      <label for="overLayerName">
        OverLayer
      </label>
      <select name="overLayerName" id="overLayerName" v-model="overLayerIndex">
        <option v-for="(layer, index) in overlayers" :key="layer.layer" :value="index">{{layer.layer}}</option>
      </select>
      <label for="opacity">
        Opacity: {{showOpacity}}
      </label>
      <input type="range" id="opacity" v-model.number="opacity" name="opacity" max="1" min="0" step="0.01" >
      <label for="date"></label>
      <input type="date" id="date" name="date" v-model="date">
    </div>
</template>

<script>
import * as L from 'leaflet/dist/leaflet'
import {mapLayerDefault, overLayerDefault} from '../data/defaultOption'

const urlTemplate = '' +
  'https://gibs-{s}.earthdata.nasa.gov' +
  '/wmts/epsg3031/best/' +
  '{layer}/default/{date}/{tileMatrixSet}/{z}/{y}/{x}.{format}'

export default {
  name: 'Configure',
  props: ['layers', 'overlayers'],
  data: function () {
    return {
      layerIndex: 0,
      overLayerIndex: 0,
      opacity: 0.5,
      date: new Date().toISOString().substr(0, 10),
    }
  },
  mounted () {
    this.emitNewLayers()
  },
  computed: {
    currentLayer () {
      let layer = this.layers[this.layerIndex]
      return L.tileLayer(urlTemplate, Object.assign({}, mapLayerDefault, layer, {
        date: this.date,
      }))
    },
    currentOverLayer () {
      let layer = this.overlayers[this.overLayerIndex]
      return L.tileLayer(urlTemplate, Object.assign({}, overLayerDefault, layer, {
        opacity: this.opacity,
        date: this.date,
      }))
    },
    showOpacity () {
      return this.opacity.toFixed(2)
    },
  },
  methods: {
    emitNewLayers () {
      this.$emit('changeLayer', [this.currentLayer, this.currentOverLayer])
    },
  },
  watch: {
    '$data': {
      handler: function () {
        this.emitNewLayers()
      },
      deep: true,
    },
  },
}
</script>

<style scoped>

</style>

<template>
  <div id="wrapper">
    <configure :layers="layers" :overlayers="overlayers" v-on:changeLayer="(l) => {this.layer = l}"></configure>
    <map-view :layer="layer"></map-view>
  </div>
</template>

<script>
import Configure from './components/Configure'
import MapView from './components/MapView'
import layers from './data/layers'
import overlayers from './data/overlayers.js'

export default {
  name: 'App',
  data: () => {
    return {
      layers,
      overlayers,
      layer: [],
    }
  },
  components: {
    MapView,
    Configure,
  },
}
</script>

<style scoped>
  #wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

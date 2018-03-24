webpackJsonp([1],{"2heA":function(e,a){},EYnv:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("7+uW"),n=t("woOf"),o=t.n(n),i=t("waXz"),s={tileMatrixSet:"250m",format:"jpg",noWrap:!0,continuousWorld:!0,subdomains:"abc",date:"2016-05-11",minNativeZoom:0,maxNativeZoom:5},l={tileMatrixSet:"1km",format:"png",noWrap:!0,continuousWorld:!0,subdomains:"abc",date:"2016-05-11",minNativeZoom:0,maxNativeZoom:3},c="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3031/best/{layer}/default/{date}/{tileMatrixSet}/{z}/{y}/{x}.{format}",m={name:"Configure",props:["layers","overlayers"],data:function(){return{layerIndex:0,overLayerIndex:0,opacity:.5,date:(new Date).toISOString().substr(0,10)}},mounted:function(){this.emitNewLayers()},computed:{currentLayer:function(){var e=this.layers[this.layerIndex];return i.tileLayer(c,o()({},s,e,{date:this.date}))},currentOverLayer:function(){var e=this.overlayers[this.overLayerIndex];return i.tileLayer(c,o()({},l,e,{opacity:this.opacity,date:this.date}))},showOpacity:function(){return this.opacity.toFixed(2)}},methods:{emitNewLayers:function(){this.$emit("changeLayer",[this.currentLayer,this.currentOverLayer])}},watch:{$data:{handler:function(){this.emitNewLayers()},deep:!0}}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"configure"}},[t("label",{attrs:{for:"mapLayerName"}},[e._v("\n    Layer\n  ")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.layerIndex,expression:"layerIndex"}],attrs:{name:"mapLayerName",id:"mapLayerName"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.layerIndex=a.target.multiple?t:t[0]}}},e._l(e.layers,function(a,r){return t("option",{key:a.layer,domProps:{value:r}},[e._v(e._s(a.layer))])})),e._v(" "),t("label",{attrs:{for:"overLayerName"}},[e._v("\n    OverLayer\n  ")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.overLayerIndex,expression:"overLayerIndex"}],attrs:{name:"overLayerName",id:"overLayerName"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.overLayerIndex=a.target.multiple?t:t[0]}}},e._l(e.overlayers,function(a,r){return t("option",{key:a.layer,domProps:{value:r}},[e._v(e._s(a.layer))])})),e._v(" "),t("label",{attrs:{for:"opacity"}},[e._v("\n    Opacity: "+e._s(e.showOpacity)+"\n  ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.opacity,expression:"opacity",modifiers:{number:!0}}],attrs:{type:"range",id:"opacity",name:"opacity",max:"1",min:"0",step:"0.01"},domProps:{value:e.opacity},on:{__r:function(a){e.opacity=e._n(a.target.value)},blur:function(a){e.$forceUpdate()}}}),e._v(" "),t("label",{attrs:{for:"date"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",id:"date",name:"date"},domProps:{value:e.date},on:{input:function(a){a.target.composing||(e.date=a.target.value)}}})])},staticRenderFns:[]};var _=t("VU/8")(m,u,!1,function(e){t("QySj")},"data-v-89261426",null).exports,p=t("mvHQ"),d=t.n(p),y=t("d7EF"),v=t.n(y),f=t("nrd6"),h=t.n(f),S=(t("EYnv"),t("+INe")),g=new(t.n(S).a.CRS)("EPSG:3031","+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs ",{origin:[-4194304,4194304],resolutions:[16384,8192,4096,2048,1024,512],bounds:h.a.bounds(h.a.point(-4194304,-4194304),h.a.point(4194304,4194304))}),I={name:"MapView",props:{layer:{default:[]}},data:function(){return{map:null}},mounted:function(){this.map=h.a.map("map-view",{center:[-90,180],zoom:0,maxZoom:5,crs:g})},watch:{layer:function(e,a){a.length<2&&(a=[{options:{}},{options:{}}]);var t=a,r=v()(t,2),n=r[0],o=r[1],i=v()(e,2),s=i[0],l=i[1];d()(s.options)!==d()(n.options)&&(this.map.removeLayer(n),this.map.addLayer(s)),this.map.removeLayer(o),this.map.addLayer(l)}}},x={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"map-view"}})},staticRenderFns:[]};var M=t("VU/8")(I,x,!1,function(e){t("2heA")},"data-v-c49a812a",null).exports,N=t("bnfB"),w=t.n(N),b=t("UMFB"),j=t.n(b),B={name:"App",data:function(){return{layers:w.a,overlayers:j.a,layer:[]}},components:{MapView:M,Configure:_}},L={render:function(){var e=this,a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"wrapper"}},[t("configure",{attrs:{layers:this.layers,overlayers:this.overlayers},on:{changeLayer:function(a){e.layer=a}}}),this._v(" "),t("map-view",{attrs:{layer:this.layer}})],1)},staticRenderFns:[]};var O=t("VU/8")(B,L,!1,function(e){t("QkWf")},"data-v-fafe5790",null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:O},template:"<App/>"})},QkWf:function(e,a){},QySj:function(e,a){},UMFB:function(e,a){e.exports=[{layer:"VIIRS_SNPP_Brightness_Temp_BandI5_Day",tileMatrixSet:"250m",maxNativeZoom:5},{layer:"VIIRS_SNPP_Brightness_Temp_BandI5_Night",tileMatrixSet:"250m",maxNativeZoom:5},{layer:"MODIS_Terra_Brightness_Temp_Band31_Day"},{layer:"MODIS_Terra_Brightness_Temp_Band31_Night"},{layer:"MODIS_Aqua_Brightness_Temp_Band31_Day"},{layer:"MODIS_Aqua_Brightness_Temp_Band31_Night"},{layer:"MODIS_Terra_Ice_Surface_Temp_Day"},{layer:"MODIS_Terra_Ice_Surface_Temp_Night"},{layer:"MODIS_Aqua_Ice_Surface_Temp_Day"},{layer:"MODIS_Aqua_Ice_Surface_Temp_Night"},{layer:"MODIS_Terra_Sea_Ice"},{layer:"MODIS_Aqua_Sea_Ice"},{layer:"AMSR2_Sea_Ice_Concentration_12km"},{layer:"AMSR2_Sea_Ice_Concentration_25km"},{layer:"AMSR2_Sea_Ice_Brightness_Temp_6km_89H"},{layer:"AMSR2_Sea_Ice_Brightness_Temp_6km_89V"},{layer:"SSMIS_Sea_Ice_Concentration"},{layer:"SSMIS_Sea_Ice_Concentration_Snow_Extent"},{layer:"MODIS_Terra_NDSI_Snow_Cover",tileMatrixSet:"500m",maxNativeZoom:4},{layer:"MODIS_Aqua_NDSI_Snow_Cover",tileMatrixSet:"500m",maxNativeZoom:4},{layer:"SCAR_Land_Mask",tileMatrixSet:"250m",maxNativeZoom:5},{layer:"Graticule",tileMatrixSet:"250m",maxNativeZoom:5},{layer:"Coastlines",tileMatrixSet:"250m",maxNativeZoom:5}]},bnfB:function(e,a){e.exports=[{layer:"MODIS_Terra_CorrectedReflectance_TrueColor"},{layer:"MODIS_Aqua_CorrectedReflectance_TrueColor"},{layer:"VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1"},{layer:"VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11"},{layer:"MODIS_Terra_CorrectedReflectance_Bands721"},{layer:"MODIS_Aqua_CorrectedReflectance_Bands721"},{layer:"MODIS_Terra_CorrectedReflectance_Bands367"},{layer:"VIIRS_SNPP_CorrectedReflectance_TrueColor"},{layer:"BlueMarble_NextGeneration",tileMatrixSet:"500m",maxNativeZoom:4},{layer:"BlueMarble_ShadedRelief",tileMatrixSet:"500m",maxNativeZoom:4},{layer:"BlueMarble_ShadedRelief_Bathymetry",tileMatrixSet:"500m",maxNativeZoom:4}]},lQeg:function(e,a){e.exports={_args:[["proj4@2.4.4","/home/i7sdream/code/learnVue/antarctica"]],_from:"proj4@2.4.4",_id:"proj4@2.4.4",_inBundle:!1,_integrity:"sha512-yo6qTpBQXnxhcPopKJeVwwOBRzUpEa3vzSFlr38f5mF4Jnfb6NOL/ePIomefWiZmPgkUblHpcwnWVMB8FS3GKw==",_location:"/proj4",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"proj4@2.4.4",name:"proj4",escapedName:"proj4",rawSpec:"2.4.4",saveSpec:null,fetchSpec:"2.4.4"},_requiredBy:["/proj4leaflet"],_resolved:"https://registry.npmjs.org/proj4/-/proj4-2.4.4.tgz",_spec:"2.4.4",_where:"/home/i7sdream/code/learnVue/antarctica",author:"",bugs:{url:"https://github.com/proj4js/proj4js/issues"},contributors:[{name:"Mike Adair",email:"madair@dmsolutions.ca"},{name:"Richard Greenwood",email:"rich@greenwoodmap.com"},{name:"Calvin Metcalf",email:"calvin.metcalf@gmail.com"},{name:"Richard Marsden",url:"http://www.winwaed.com"},{name:"T. Mittan"},{name:"D. Steinwand"},{name:"S. Nelson"}],dependencies:{mgrs:"1.0.0","wkt-parser":"^1.2.0"},description:"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",devDependencies:{chai:"~1.8.1",curl:"git://github.com/cujojs/curl.git",grunt:"^1.0.1","grunt-cli":"~0.1.13","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~1.1.0","grunt-contrib-uglify":"~0.11.1","grunt-mocha-phantomjs":"~0.4.0","grunt-rollup":"^1.0.1",istanbul:"~0.2.4",mocha:"~1.17.1",rollup:"^0.41.4","rollup-plugin-json":"^2.0.1","rollup-plugin-node-resolve":"^2.0.0",tin:"~0.4.0"},directories:{test:"test",doc:"docs"},homepage:"https://github.com/proj4js/proj4js#readme",license:"MIT",main:"dist/proj4-src.js",module:"lib/index.js",name:"proj4",repository:{type:"git",url:"git://github.com/proj4js/proj4js.git"},scripts:{build:"grunt","build:tmerc":"grunt build:tmerc",test:"npm run build && istanbul test _mocha test/test.js"},version:"2.4.4"}}},["NHnr"]);
//# sourceMappingURL=app.850bfa754a21d568eaaf.js.map
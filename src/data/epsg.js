import L from 'leaflet'
import proj from 'proj4leaflet'

export let epsg3031 = new proj.CRS(
  'EPSG:3031',
  '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs ',
  {
    origin: [-4194304, 4194304],
    resolutions: [
      16384,
      8192,
      4096,
      2048,
      1024,
      512,
    ],
    bounds: L.bounds(
      L.point(-4194304, -4194304),
      L.point(4194304, 4194304)
    ),
  }
)

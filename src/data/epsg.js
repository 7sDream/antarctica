import L from 'leaflet'
import proj from 'proj4leaflet'

export let epsg3031 = new proj.CRS(
  'EPSG:3031',
  '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs ',
  {
    origin: [-2097152, 2097152],
    resolutions: [
      8192.0,
      4096.0,
      2048.0,
      1024.0,
      512.0,
      256.0,
    ],
    bounds: L.bounds(
      L.point(-4194304, -4194304),
      L.point(4194304, 4194304)
    ),
  }
)

# Antarctica

Anatarctica maps based on [leaflet.js](http://leafletjs.com/), [proj4leaflet](http://kartena.github.io/Proj4Leaflet/) and images from [GIBS of NASA](https://earthdata.nasa.gov/about/science-system-description/eosdis-components/global-imagery-browse-services-gibs).

[Demo site](https://7sdream.github.io/antarctica)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Screenshot

![](https://i.loli.net/2018/03/24/5ab61766e13ba.png)

1. Main map layer
2. Overlay
3. Overlay opicity
4. Show date

Notice: Default show date is current date, so many main layer may be incomplete, you can choose a early date to get a great view.

I prefer `BlueMarble_ShadedRelief_Bathymetry` with `AMSR2_Sea_Ice_Concentration_12km`, show date can be 2 or 3 days before today.

 ## License

CC-BY-SA 3.0

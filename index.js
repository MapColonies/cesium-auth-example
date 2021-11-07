var viewer = new Cesium.Viewer("cesiumContainer");

var resource = new Cesium.Resource({
   url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS',
   headers: {
     'X-API-KEY': 'valueOfHeader'
   },
   queryParameters: {
     'token': '123-435-456-000'
   }
});

var shadedRelief1 = new Cesium.WebMapTileServiceImageryProvider({
    url : resource,
    layer : 'USGSShadedReliefOnly',
    style : 'default',
    format : 'image/jpeg',
    tileMatrixSetID : 'default028mm',
    // tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],
    maximumLevel: 19,
    credit : new Cesium.Credit('U. S. Geological Survey')
});
viewer.imageryLayers.addImageryProvider(shadedRelief1);

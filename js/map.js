 require([
    'dojo/dom',
    'dojo/domReady!'
    ], function (dom) {
        var cont = dom.byId('cesiumContainer');
         var viewer = new Cesium.Viewer(cont);
    viewer.dataSources.add(Cesium.GeoJsonDataSource.load('http://localhost/studemo/data/proivece.geojson'));
	    viewer.dataSources.add(Cesium.GeoJsonDataSource.load('http://localhost/studemo/data/city.geojson'));
	//viewer.dataSources.add(Cesium.GeoJsonDataSource.load('http://localhost/studemo/data/PGS_image.geojson'));
	});

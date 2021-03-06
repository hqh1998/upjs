<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=7,IE=9">
<meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no">
<title>ArcGIS GeoJSON Layer</title>
<link rel="shortcut icon"  href="https://hqh1998.github.io/upjs/favicon.ico">
<link rel="stylesheet" href="https://js.arcgis.com/3.23/esri/css/esri.css">
<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://hqh1998.github.io/upjs/bootstrapmap.css">
<style>
    html, body, #map {
      height: 100%;
      width: 100%;
    }
</style>
<script src="https://js.arcgis.com/3.23/"></script>
<script src="https://hqh1998.github.io/upjs/terraformer.min.js"></script>
<script src="https://hqh1998.github.io/upjs/terraformer-arcgis-parser.min.js"></script>
<script>
    require(["esri/map",
        "https://hqh1998.github.io/upjs/geojsonlayer.js",
        "esri/renderers/SimpleRenderer",
        "dojo/on",
        "dojo/query",
        "dojo/dom",
        "dojo/domReady!"],
      function (Map, GeoJsonLayer, SimpleRenderer, on, query, dom) {

        // Create map
        var map = new Map("map", {
            basemap: "gray",
            center: [-122.5, 45.5],
            zoom: 5
        });

           
         var geoJsonLayer = new GeoJsonLayer({
                url: "https://hqh1998.github.io/json/text.geojson "
            });

        
        var simpleJson = {
                "type": "simple",
                 "label": "",
                 "description": "",
                 "symbol": {
                     "color": [210,105,30,191],
                     "size": 10,
                     "angle": 0,
                     "xoffset": 0,
                     "yoffset": 0,
                     "type": "esriSLS" // esriSMS, esriSLS
                 }
             };

        
         var renderer = new SimpleRenderer(simpleJson);
          geoJsonLayer.setRenderer(renderer);
     
         geoJsonLayer.on("update-end", function (e) {
                map.setExtent(e.target.extent.expand(1.2));
            });
       
         map.addLayer(geoJsonLayer);
        
         });    
 </script>
  </head>
  <body>
   <div id="map"></div>
   
  </body>
</html>  
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
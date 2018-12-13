import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js';

var map = new Map({
  view: new View({
    center: fromLonLat([-0.067970, 51.541617]),
    zoom: 14
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
})


;
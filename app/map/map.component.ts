import {Component} from 'angular2/core';
import L from 'leaflet';
import draw from 'leaflet-draw';

@Component({
    selector: 'my-map',
    template: '<div id="map"></div>'
})

export class MapComponent {
    options: Object;
    constructor () {
        console.log(L)
    }

    ngOnInit () {
        let options = {
            mapId: "map",
            lat: "51.505",
            lng: "-0.09",
            zoom: 12
        }
        let map = L.map(options.mapId, {
            center: new L.LatLng(options.lat, options.lng),
            zoom: options.zoom,
            zoomControl: false
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var zoomControl = L.control.zoom({
            position: 'topright'
        });
        map.addControl(zoomControl);
        this.map = map;
        this.addDrawControl();

        return map;
    }

    addDrawControl () {
        // Initialise the FeatureGroup to store editable layers
        let drawnItems = new L.FeatureGroup();
        this.map.addLayer(drawnItems);

        // Initialise the draw control and pass it the FeatureGroup of editable layers
        var drawControl = new L.Control.Draw({
            draw: {
                position: 'topleft',
                polygon: false,
                polyline: false,
                circle: false,
                marker: false
            },
            edit: {
                featureGroup: drawnItems,
                edit: true
            }
        });
        //this.map.addControl(drawControl);
        /*this.map.on('draw:created', function (e) {
            var layer = e.layer;
            drawnItems.addLayer(layer);
        });
        //if layer already exists, delete is not working by clicking on it
        //so a solution was to to clear the layer after clicking save on delete
        this.map.on('draw:deleted', function(e){

        });*/
    }
}

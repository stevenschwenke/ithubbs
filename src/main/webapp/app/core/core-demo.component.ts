import { Component, OnInit} from '@angular/core';

import {latLng, tileLayer} from 'leaflet';

@Component({
    selector: 'jhi-leaflet-core-demo',
    templateUrl: './core-demo.component.html'
})
export class LeafletCoreDemoComponent implements OnInit {

    optionsSpec: {
        layers: any[],
        zoom: number,
        center: number[]
    } = {
        layers: [
            {
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                maxZoom: 18,
                attribution: 'Open Street Map'
            }
        ],
        zoom: 5,
        center: [46.879966, -121.726909]
    };

    /*
     * This are the leaflet map options that we're going to use for input binding
     */

    options = {
        layers: this.optionsSpec.layers.map((l) => {
            return tileLayer(l.url, {maxZoom: l.maxZoom, attribution: l.attribution});
        }),
        zoom: this.optionsSpec.zoom,
        center: latLng(this.optionsSpec.center[0], this.optionsSpec.center[1])
    };

    constructor() { }

    ngOnInit() {
    }

    //
    /*
     * This is a specification of the leaflet options
     * The reason to duplicate this object is so we can easily render it to the template
     */

}

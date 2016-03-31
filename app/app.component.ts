import {Component} from 'angular2/core';
import {MapComponent} from './map/map.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [MapComponent]
})
export class AppComponent {

}

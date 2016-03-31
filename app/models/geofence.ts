import { Notification } from "./notification";
import {Geometry} from "./geometry";
import {Properties} from '.properties';


export interface Geofence {
    type: string;
    name: string;
    geometry: Geometry;
    properties: Properties;
}

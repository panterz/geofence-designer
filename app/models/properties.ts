import { Notification } from "./notification";

enum Event {
    ENTER, DWELL, EXIT
}

export interface Properties {
    id: string;
    radius: number;
    event: Array<Event>;
    notification: Notification;
}

interface CalendarUser {
    _id: string;
    name: string;
};


// export class CalendarEvent {
//     title: string;
//     start: Date;
//     endDate: Date;
//     user: CalendarUser;


//     constructor(_title: string, _start: Date, _endDate: Date, _user: CalendarUser) {
//         this.title = _title;
//         this.start = _start;
//         this.endDate = _endDate;
//         this.user = _user
//     }
// };

export interface CalendarEv {
    title: string;
    start: Date;
    endDate: Date;
    user: CalendarUser;
    notes: string;
};
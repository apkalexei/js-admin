import { Injectable } from '@angular/core'
import { AngularFireDatabase } from "angularfire2"
import { Observable } from "rxjs/Rx"

export class ChartData {
    date: Date;
    l: number;
    h: number;
    o: number;
    c: number;
}

@Injectable()
export class Service {
    constructor(private db:AngularFireDatabase) {
    }

    getChartData(): Observable<ChartData[]> {
        return this.db.list('charts-data');
    }
}
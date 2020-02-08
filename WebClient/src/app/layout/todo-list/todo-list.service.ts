

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class ToDoListService {

    constructor(private http: Http) { }

    getFilters(): Observable<any> {
        let url = "https://localhost:5001/api/todo";
        return this.http.get(url);
    }

}
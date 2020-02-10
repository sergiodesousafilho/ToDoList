import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CreateTaskListService {

    constructor(private http: Http) { }

    getAvailableCategories(): Observable<any> {
        let url = "https://localhost:5001/api/category";
        return this.http.get(url);
    }

    createToDoList(newList): Observable<any> {
        let url = "https://localhost:5001/api/todo";
        console.log('salvando item', newList)
        return this.http.post(url, { newList: newList });
    }

}
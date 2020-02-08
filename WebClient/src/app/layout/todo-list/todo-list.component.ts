import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ToDoListService } from './todo-list.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    animations: [routerTransition()]
})
export class ToDoListComponent implements OnInit {
    public todoLists: Array<any> = [];
    
    constructor(private service: ToDoListService) {
    }

    ngOnInit() {
        this.loadToDoLists();
    }

    private loadToDoLists() {
        this.service.getFilters().subscribe(
            (result) => {
                this.todoLists = result.json();
            },
            (error) => {
                // TODO: Tratar
            }
        );
    }
}
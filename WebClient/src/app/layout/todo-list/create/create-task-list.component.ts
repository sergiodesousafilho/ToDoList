import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
    selector: 'app-create-task-list',
    templateUrl: './create-task-list.component.html',
    styleUrls: ['./create-task-list.component.scss'],
    animations: [routerTransition()]
})
export class CreateTaskListComponent implements OnInit {

    public newTaskList: any = {};
        
    constructor() {
    }

    ngOnInit() {
        
    }
    
    public onSubmit(form) {
        console.log('form', form)
    }
}
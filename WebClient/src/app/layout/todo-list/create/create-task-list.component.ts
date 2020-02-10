import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CreateTaskListService } from './create-task-list.service';


@Component({
    selector: 'app-create-task-list',
    templateUrl: './create-task-list.component.html',
    styleUrls: ['./create-task-list.component.scss'],
    animations: [routerTransition()]
})
export class CreateTaskListComponent implements OnInit {
    public loadingAvailableCategories = true;
    public availableCategories = null;
    public selectedCategory = null;
    public newTaskList: any = {};
        
    constructor(private service: CreateTaskListService) {
    }

    ngOnInit() {
        this.loadAvailableCategories();
    }

    private loadAvailableCategories() {
        this.loadingAvailableCategories = true;
        this.service.getAvailableCategories().subscribe(
            (result) => {
                this.availableCategories = result.json();
                this.loadingAvailableCategories = false;
                if(this.availableCategories.length > 0) {
                    this.selectedCategory = this.availableCategories[0].id;
                }
            },
            (error) => {
                // TODO: Tratar
            }
        );
    }    
    
    public onSubmit(form) {
        let newToDoList:any = {};
        newToDoList.Id = 0;
        newToDoList.Name = form.value.Name;
        newToDoList.CategoryId = form.value.Category;
        newToDoList.Done = false;

        // this.service.createToDoList(newToDoList).subscribe(
        //     (result) => {
        //         console.log('result', result.json())
        //     },
        //     (error) => {
        //         // TODO: Tratar
        //         console.log('erro...', error)
        //     }
        // );
    }
}
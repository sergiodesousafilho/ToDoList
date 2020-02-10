import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ToDoListRoutingModule } from './todo-list-routing.module';
import { ToDoListComponent } from './todo-list.component';
import { StatModule } from '../../shared';
import { ToDoListService } from './todo-list.service';
import { CreateTaskListComponent } from './create/create-task-list.component';
import { CreateTaskListService } from './create/create-task-list.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ToDoListRoutingModule,
        StatModule,
        TranslateModule,
        FormsModule
    ],
    declarations: [
        ToDoListComponent,
        CreateTaskListComponent        
    ],
    exports: [ CreateTaskListComponent],
    providers: [
        ToDoListService,
        CreateTaskListService
    ]
})
export class ToDoListModule {}

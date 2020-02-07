import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ToDoListRoutingModule } from './todo-list-routing.module';
import { ToDoListComponent } from './todo-list.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ToDoListRoutingModule,
        StatModule
    ],
    declarations: [
        ToDoListComponent        
    ]
})
export class ToDoListModule {}

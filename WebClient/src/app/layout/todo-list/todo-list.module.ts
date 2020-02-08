import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { ToDoListRoutingModule } from './todo-list-routing.module';
import { ToDoListComponent } from './todo-list.component';
import { StatModule } from '../../shared';
import { ToDoListService } from './todo-list.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ToDoListRoutingModule,
        StatModule,
        TranslateModule
    ],
    declarations: [
        ToDoListComponent        
    ],
    providers: [
        ToDoListService
    ]
})
export class ToDoListModule {}

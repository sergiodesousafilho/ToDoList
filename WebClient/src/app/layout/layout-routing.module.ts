import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CreateTaskListComponent } from './todo-list/create/create-task-list.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'prefix' },
            { path: 'list', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.ToDoListModule) },
            { path: 'create-list', component: CreateTaskListComponent },
            { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

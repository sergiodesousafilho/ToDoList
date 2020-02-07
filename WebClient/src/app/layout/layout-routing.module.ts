import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'prefix' },
            { path: 'list', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.ToDoListModule) }
            //{ path: 'categories', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

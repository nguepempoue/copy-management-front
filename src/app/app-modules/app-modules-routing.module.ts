import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModuleComponent } from './app-module/app-module.component';

const routes: Routes = [
  {
    path:"", component: AppModuleComponent,
    children: [

      {
        path : 'courses',
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
      },

      {
        path : 'dashboards',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path : 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppModulesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// 
import { LoginClientComponent } from './login-client/login-client.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { PlatListComponent } from './plat-list/plat-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
// 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'admin/e_kaly/dashboard',
    pathMatch: 'full',
  }, 
  // {
  //   path: '',
  //   children: [ {
  //     path: '',
  //     component: InscriptionClientComponent
  //     }]
  // },
  {
      path: 'client',
      children: [ {
        path: 'login',
        component: LoginClientComponent
        },
        {
          path: 'restaurant',
          component: RestoListComponent
        },
        {
          path: 'restaurant/plat',
          component: PlatListComponent
        },
        
      ]
  },
  {
    path: 'admin/e_kaly',
    redirectTo: 'admin/e_kaly/dashboard',
    pathMatch: 'full',
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: 'e_kaly',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

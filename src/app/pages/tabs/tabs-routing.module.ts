import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
 
  {
    path:'',
    redirectTo: 'tabs/home-page',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-page',
        loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
      },
      {
        path: 'search-page',
        loadChildren: () => import('./search-page/search-page.module').then( m => m.SearchPagePageModule)
      },
      {
        path: 'section-page',
        loadChildren: () => import('./section-page/section-page.module').then( m => m.SectionPagePageModule)
      },
      {
        path: 'contact-page',
        loadChildren: () => import('./contact-page/contact-page.module').then( m => m.ContactPagePageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

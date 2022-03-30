import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./pages/sing-up/sing-up.module').then( m => m.SingUpPageModule)
  },
  {
    path: 'pass-recovery',
    loadChildren: () => import('./pages/pass-recovery/pass-recovery.module').then( m => m.PassRecoveryPageModule)
  },
  {
    path: 'pass-recovery-v2',
    loadChildren: () => import('./pages/pass-recovery-v2/pass-recovery-v2.module').then( m => m.PassRecoveryV2PageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

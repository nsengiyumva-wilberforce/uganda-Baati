import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'stock-competition',
    loadChildren: () => import('./stock-competition/stock-competition.module').then( m => m.StockCompetitionPageModule)
  },
  {
    path: 'route-schedules',
    loadChildren: () => import('./route-schedules/route-schedules.module').then( m => m.RouteSchedulesPageModule)
  },
  {
    path: 'customer-feedback',
    loadChildren: () => import('./customer-feedback/customer-feedback.module').then( m => m.CustomerFeedbackPageModule)
  },
  {
    path: 'add-outlet',
    loadChildren: () => import('./add-outlet/add-outlet.module').then( m => m.AddOutletPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdaDataComponent} from './fda-data/fda-data.component';
import {SocialLoginComponent} from './social-login/social-login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: 'tables/:username',
    component: FdaDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SocialLoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

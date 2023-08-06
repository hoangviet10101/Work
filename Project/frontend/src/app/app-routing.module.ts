import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { Test1Component } from './components/pages/test1/test1.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { Document1Component } from './components/pages/document1/document1.component';
import { Document2Component } from './components/pages/document2/document2.component';
import { Test2Component } from './components/pages/test2/test2.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'userData/:id', component:Test1Component},
  {path:'login', component:LoginPageComponent},
  {path:'pages/document1', component:Document1Component},
  {path:'pages/document2', component:Document2Component},
  {path:'pages/test2', component:Test2Component},
  {path:'register', component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

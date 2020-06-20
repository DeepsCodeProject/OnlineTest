import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';


const route:Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent,canActivate: [AuthGuard]},
{path:'home',component:HomeComponent,
children:[
    {path:'create-user',component:CreateUserComponent}
]}
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
  })
  export class AppRoutingModule{}
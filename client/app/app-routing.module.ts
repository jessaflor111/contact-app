import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';


  const routes: Routes = [
    {
      path: 'create',
      component: CreateComponent
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    },
    {
      path: 'userlogin',
      component: UserloginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'read',
      component: ReadComponent
    },
    {
      path: 'update',
      component: UpdateComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }

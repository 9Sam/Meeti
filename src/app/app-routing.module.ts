import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@features/login/login.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';

const routes: Routes = [
    {path:"home", component:HomePageComponent},
    {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

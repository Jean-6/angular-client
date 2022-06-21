import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ConnectionComponent} from "./connection/connection.component";
import {PasswordForgottenComponent} from "./password-forgotten/password-forgotten.component";
import {ConnectionAdminComponent} from "./connection-admin/connection-admin.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'',component:ConnectionComponent},
  {path: 'registration',component:RegistrationComponent},
  {path:'passwordForgotten',component:PasswordForgottenComponent},
  {path:'connectionAdmin',component:ConnectionAdminComponent},
  {path:'adminHome',component:AdminHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

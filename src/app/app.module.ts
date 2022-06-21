import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectionAdminComponent } from './connection-admin/connection-admin.component';



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    RegistrationComponent,
    PasswordForgottenComponent,
    HeaderComponent,
    AdminHomeComponent,
    UserHomeComponent,
    FooterComponent,
    ConnectionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}

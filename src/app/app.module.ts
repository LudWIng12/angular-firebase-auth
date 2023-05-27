import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { VerificarComponent } from './components/verificar/verificar.component';

import { environment } from 'src/environments/environment';
import { ConfirmationResultService } from './services/confirmation-result.service';
import * as firebase from 'firebase/app';

  export const firebaseConfig = {
    apiKey: 'AIzaSyC47AMfhjCTbBdH7X2-u3S6YdPursldDuE',
    authDomain: 'proyecto-gina-a9700.firebaseapp.com',
    projectId: 'proyecto-gina-a9700',
    storageBucket: 'proyecto-gina-a9700.appspot.com',
    messagingSenderId: '204542506942',
    appId: '1:204542506942:web:8810a04d7d27bfd57c6bef',
  };

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    VerificarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    ConfirmationResultService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

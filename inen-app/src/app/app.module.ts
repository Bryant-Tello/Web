import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SeguimientoPacienteComponent } from './pages/seguimiento-paciente/seguimiento-paciente.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicosComponent,
    PacientesComponent,
    SeguimientoPacienteComponent,
    DirectorioComponent,
    PerfilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SeguimientoPacienteComponent } from './pages/seguimiento-paciente/seguimiento-paciente.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MedicosComponent,
    PacientesComponent,
    SeguimientoPacienteComponent,
    DirectorioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

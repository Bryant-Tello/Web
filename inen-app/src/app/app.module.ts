import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { DetallePacienteComponent } from './pages/detallePaciente/detallePaciente.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SeguimientoPacienteComponent } from './pages/seguimiento-paciente/seguimiento-paciente.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListaPacientesComponent } from './pages/pacientes/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './pages/pacientes/nuevo-paciente/nuevo-paciente.component';
import { EditarHistorialComponent } from './pages/historial/editar-historial/editar-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicosComponent,
    DetallePacienteComponent,
    PacientesComponent,
    SeguimientoPacienteComponent,
    DirectorioComponent,
    PerfilComponent,
    HomeComponent,
    HistorialComponent,
    ListaPacientesComponent,
    NuevoPacienteComponent,
    EditarHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

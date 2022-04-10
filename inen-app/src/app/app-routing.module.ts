import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SeguimientoPacienteComponent } from './pages/seguimiento-paciente/seguimiento-paciente.component';
import { ListaPacientesComponent } from './pages/pacientes/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './pages/pacientes/nuevo-paciente/nuevo-paciente.component';

const routes: Routes = [
  {path: 'directorio', component: DirectorioComponent},
  {path: 'login', component: LoginComponent },
  {path: 'medicos', component: MedicosComponent},
  {path : 'home', component: HomeComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'seguimiento-paciente', component: SeguimientoPacienteComponent},
  {path: 'historialmedico', component: HistorialComponent},
  {path: 'lista-pacientes', component: ListaPacientesComponent},
  {path: 'nuevo-paciente', component: NuevoPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

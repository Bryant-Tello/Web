import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { DetallePacienteComponent } from './pages/detallePaciente/detallePaciente.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SeguimientoPacienteComponent } from './pages/seguimiento-paciente/seguimiento-paciente.component';
import { ListaPacientesComponent } from './pages/pacientes/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './pages/pacientes/nuevo-paciente/nuevo-paciente.component';
import { EditarHistorialComponent } from './pages/historial/editar-historial/editar-historial.component';
import { PasswordComponent } from './pages/password/password.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path: 'directorio', component: DirectorioComponent},
  {path: 'login', component: LoginComponent },
  {path: 'password', component: PasswordComponent },
  {path: 'medicos', component: MedicosComponent},
  {path: 'detallePaciente', component: DetallePacienteComponent},
  {path: 'perfil', component: PerfilComponent},
  {path : 'home', component: HomeComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'seguimiento-paciente', component: SeguimientoPacienteComponent},
  {path: 'historialmedico', component: HistorialComponent},
  {path: 'editarhistorialmedico', component: EditarHistorialComponent},
  {path: 'lista-pacientes', component: ListaPacientesComponent},
  {path: 'nuevo-paciente', component: NuevoPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

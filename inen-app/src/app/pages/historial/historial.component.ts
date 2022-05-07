import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly hs: HistorialService,
    private router: Router
  ) { }

  historialForm = this.fb.group({
    NumExpediente: ['', Validators.required],
    Paciente: ['', Validators.required],
    Nacionalidad: ['', Validators.required],
    TipoDocumento: [0, Validators.required],
    NumDocumento: ['', Validators.required],
    Edad: [0, Validators.required],
    Radiologo: ['', Validators.required],
    EstadoCivil: [0, Validators.required],
    Telefono: ['', Validators.required],
    Celular: ['', Validators.required],
    Correo: ['', Validators.required],
    FechaNacimiento: ['', Validators.required],
    Ocupacion: ['', Validators.required],
    Direccion: ['', Validators.required],
    Distrito: [0, Validators.required],
    Informe: ['', Validators.required],
    Img: [''],
  })

  __insert(data: any) {
    this.hs.__be_insert(data).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert("Historial Medico creado con Expediente: " + rest.data.historialMedico);
        this.router.navigate(['list-historial']);
      } else {
        alert(rest.errorMessage)
      }
    })
  }

  __onSubmit() {
    if(this.historialForm.valid) {
      this.historialForm.value.TipoDocumento = parseInt(this.historialForm.value.TipoDocumento);
      this.historialForm.value.Edad = parseInt(this.historialForm.value.Edad);
      this.historialForm.value.EstadoCivil = parseInt(this.historialForm.value.EstadoCivil);
      this.historialForm.value.Distrito = parseInt(this.historialForm.value.Distrito);
      this.__insert(this.historialForm.value);
    } else {
      alert("Formulario no valido...")
    }
  }

  ngOnInit(): void {
  }

}

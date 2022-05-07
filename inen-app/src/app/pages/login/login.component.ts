import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly us: UserService,
    private router: Router
  ) { }

  loginFormulacion = this.fb.group({
    correo: ['', Validators.required],
    clave: ['', Validators.required]
  })

  __login(data: any) {
    this.us.__be__login(data).subscribe((rest: any) => {
      if(rest.isSuccess) {
        //sessionStorage.setItem('token', rest.data.token);
        //sessionStorage.setItem('user', rest.data.nombres + ' ' + rest.data.documentoidentidad);

        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          window.location.reload();
        })
      } else {
        alert('Credenciales invalidas...')
      }
    })
  }

  ___onSubmit() {
    if(this.loginFormulacion.valid) {
      this.__login(this.loginFormulacion.value);
    } else {
      alert("Formulario no valido...")
    }
  }

  ngOnInit(): void {
  }

}

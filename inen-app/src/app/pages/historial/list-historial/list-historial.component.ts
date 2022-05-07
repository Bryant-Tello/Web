import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.css']
})
export class ListHistorialComponent implements OnInit {

  historials : any = [];

  constructor(
    private readonly hs: HistorialService
  ) { }


   __obtenerProyectos() {
     this.hs.__be_listar_historial().subscribe((rest: any) => {
       this.historials = rest.data;
       console.log(this.historials);
     })
   }

  ngOnInit(): void {
    this.__obtenerProyectos();
  }

}

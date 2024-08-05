import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  constructor(private router: Router, private headerService: HeaderService){
    headerService.headerData ={
     titulo: 'Consulta de Apontamentos',
     icone: 'search',
     routeUrl:'/consultas'
   }
 }
}

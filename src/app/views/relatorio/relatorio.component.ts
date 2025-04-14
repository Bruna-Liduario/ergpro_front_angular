import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css'
})
export class RelatorioComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Relatório',
        icone: 'description',
        routeUrl:'/relatorio'
      }
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-centrocusto-tiposervico',
  templateUrl: './centrocusto-tiposervico.component.html',
  styleUrl: './centrocusto-tiposervico.component.css'
})
export class CentrocustoTiposervicoComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Relacionar Centro de Custo - Tipo de Serviço',
        icone: 'link',
        routeUrl:'/centrocusto-tiposervico'
      }
    }

  ngOnInit(): void {

  }

}

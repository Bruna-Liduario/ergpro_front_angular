import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-tiposervicoatividade',
  templateUrl: './tiposervicoatividade.component.html',
  styleUrl: './tiposervicoatividade.component.css'
})
export class TiposervicoatividadeComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Relacionar Tipo de Servico - Atividade',
        icone: 'link',
        routeUrl:'/tipo-servico-atividade'
      }
    }

  ngOnInit(): void {

  }

}

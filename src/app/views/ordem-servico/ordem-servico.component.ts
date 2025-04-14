import { Component } from '@angular/core';

import { HeaderService } from '../../components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrl: './ordem-servico.component.css'
})
export class OrdemServicoComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Ordens de Serviços',
        icone: 'assignment',
        routeUrl:'/ordemservico'
      }
    }

    ngOnInit(): void {

    }

    navigateToOrdemServicoCreate(): void {
      this.router.navigate(['/app/ordemservico/create'])
    }

}

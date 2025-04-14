import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-associacoes',
  templateUrl: './associacoes.component.html',
  styleUrl: './associacoes.component.css'
})
export class AssociacoesComponent {

  constructor(private router: Router ,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Associações',
        icone: 'schedule',
        routeUrl:'/associacoes'
      }
    }

    navigateToTipoServicoAtividadeCreate(): void {
      this.router.navigate(['/app/tipo-servico-atividade'])
    }

    navigateToCentroCustoTipoServicoCreate(): void {
      this.router.navigate(['/app/centrocusto-tiposervico'])
    }


}

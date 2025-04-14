import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrl: './apontamento.component.css'
})
export class ApontamentoComponent {

  constructor(private router: Router ,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Apontamentos',
        icone: 'schedule',
        routeUrl:'/apontamentos'
      }
    }

    navigateToApontamentoIndividualCreate(): void {
      this.router.navigate(['/app/apontamentosind/create'])
    }

    navigateToApontamentoEquipeCreate(): void {
      this.router.navigate(['/apontamentosequipe/create'])
    }

}

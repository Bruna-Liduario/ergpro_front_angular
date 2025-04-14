import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent {

  constructor(private router: Router ,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Atividades',
        icone: 'list_alt',
        routeUrl:'/atividades'
      }
    }

    navigateToAtividadeCreate(): void {
      this.router.navigate(['/app/atividades/create'])
    }

}

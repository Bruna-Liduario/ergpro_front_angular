import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.component.html',
  styleUrl: './tipo-servico.component.css'
})
export class TipoServicoComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Tipos de Serviços',
        icone: 'build',
        routeUrl:'/tiposervico'
      }
    }

  ngOnInit(): void {

  }

  navigateToTipoServicoCreate(): void {
    this.router.navigate(['/app/tiposervico/create'])
  }

}

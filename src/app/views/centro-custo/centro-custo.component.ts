import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-centro-custo',
  templateUrl: './centro-custo.component.html',
  styleUrl: './centro-custo.component.css'
})
export class CentroCustoComponent {


  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Centro de Custo',
        icone: 'attach_money',
        routeUrl:'/centrocusto'
      }
    }

  ngOnInit(): void {

  }

  navigateToCentroCustoCreate(): void {
    this.router.navigate(['/app/centrocusto/create'])
  }
}

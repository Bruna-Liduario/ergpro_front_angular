import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.css'
})
export class CargoComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Cargos',
        icone: 'work',
        routeUrl:'/cargos'
      }
    }

  ngOnInit(): void {

  }

  navigateToCargosCreate(): void {
    this.router.navigate(['/cargos/create'])
  }

}

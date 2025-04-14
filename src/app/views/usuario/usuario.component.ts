import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Usuários',
        icone: 'people',
        routeUrl:'/usuarios'
      }
    }

  ngOnInit(): void {

  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/app/usuarios/create'])
  }

}

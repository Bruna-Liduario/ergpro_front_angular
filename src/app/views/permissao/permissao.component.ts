import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrl: './permissao.component.css'
})
export class PermissaoComponent {


  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        titulo: 'Cadastro de Permissões',
        icone: 'lock',
        routeUrl:'/permissoes'
      }
    }

  ngOnInit(): void {

  }

  navigateToPermissoesCreate(): void {
    this.router.navigate(['/permissoes/create'])
  }

}

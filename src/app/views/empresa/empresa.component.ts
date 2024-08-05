import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService){
     headerService.headerData ={
      titulo: 'Cadastro de Empresa',
      icone: 'account_balance',
      routeUrl:'/empresas'
    }
  }

  ngOnInit(): void {
  }

  navigateToEmpresaCreate(): void {
    this.router.navigate(['/empresas/create'])
  }

}

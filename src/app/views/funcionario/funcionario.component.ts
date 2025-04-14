import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css'
})
export class FuncionarioComponent implements OnInit {


  constructor(private router: Router,
    private headerService: HeaderService){
    headerService.headerData ={
     titulo: 'Cadastro de Funcionários',
     icone: 'person',
     routeUrl:'/funcionarios'
   }
 }

 ngOnInit(): void {
}

navigateToFuncionarioCreate(): void {
  this.router.navigate(['/app/funcionarios/create'])
}
}

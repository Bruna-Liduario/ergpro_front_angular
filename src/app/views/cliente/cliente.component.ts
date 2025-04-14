import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  constructor(private router: Router, private headerService: HeaderService){
    headerService.headerData ={
     titulo: 'Cadastro de Cliente',
     icone: 'face',
     routeUrl:'/clientes'
   }
 }

 navigateToClienteCreate(): void{
  this.router.navigate(['/app/clientes/create'])
 }
}

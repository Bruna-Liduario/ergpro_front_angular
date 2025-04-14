import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService,
    private router: Router){ }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.headerData.titulo
  }

  get icon(): string{
    return this.headerService.headerData.icone
  }

  get routerUrl(): string{
    return this.headerService.headerData.routeUrl
  }

  // Função de logout
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);  // Redireciona para a página de login
  }

}

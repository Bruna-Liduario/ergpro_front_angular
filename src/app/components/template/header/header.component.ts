import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService){ }

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

}

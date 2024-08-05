import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoServico } from '../tipo-servico.model';
import { MatTableDataSource } from '@angular/material/table';
import { TipoServicoService } from '../tipo-servico.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tipo-servico-read',
  templateUrl: './tipo-servico-read.component.html',
  styleUrl: './tipo-servico-read.component.css'
})
export class TipoServicoReadComponent implements OnInit {

  tipoServico : MatTableDataSource<TipoServico> = new MatTableDataSource();
  displayedColumns = ['id','descricao', 'action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tipoServicoService: TipoServicoService){}

  ngOnInit(): void {
    this.tipoServicoService.read().subscribe(tipoServico => {
      this.tipoServico.data = tipoServico;
      this.tipoServico.paginator = this.paginator
      console.log(tipoServico)
    })
  }

  applyFilter(filterValue: string) {
    this.tipoServico.filter = filterValue.trim().toLowerCase();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemServico } from '../ordem-servico.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrdemServicoService } from '../ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-read',
  templateUrl: './ordem-servico-read.component.html',
  styleUrl: './ordem-servico-read.component.css'
})
export class OrdemServicoReadComponent implements OnInit {

  ordemServico: MatTableDataSource<OrdemServico> = new MatTableDataSource();
  displayedColumns = ['id','descricao', 'datainicio', 'datafim', 'centroCusto', 'descricaoTipoServico','action']


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ordemServicoService: OrdemServicoService){}

  ngOnInit(): void {
    this.ordemServicoService.read().subscribe(ordemServico => {
      this.ordemServico.data = ordemServico;
      this.ordemServico.paginator = this.paginator
      console.log(ordemServico)
    })
  }

  applyFilter(filterValue: string) {
    this.ordemServico.filter = filterValue.trim().toLowerCase();
  }

}

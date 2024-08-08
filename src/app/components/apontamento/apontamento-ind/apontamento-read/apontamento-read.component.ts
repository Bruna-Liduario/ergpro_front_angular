import { ApontamentoService } from './../../apontamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApontamentoInd } from '../../apontamento-individual.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-apontamento-read',
  templateUrl: './apontamento-read.component.html',
  styleUrl: './apontamento-read.component.css'
})
export class ApontamentoReadComponent implements OnInit {

  apontamentosind: MatTableDataSource<ApontamentoInd> = new MatTableDataSource();
  displayedColumns = ['id','nomeFuncionario', 'descricaoOrdemServico',
    'centroCusto', 'descricaoTipoServico', 'descricaoAtividade',
    'local', 'data', 'minutosSt', 'minutosextraSt', 'observacao',  'action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apontamentoService: ApontamentoService){ }

  ngOnInit(): void {
    this.apontamentoService.read().subscribe(apontamentos => {
      this.apontamentosind.data = apontamentos;
      this.apontamentosind.paginator = this.paginator;
      console.log(apontamentos)
    })
  }

  applyFilter(filterValue: string) {
    this.apontamentosind.filter = filterValue.trim().toLowerCase();
  }


}

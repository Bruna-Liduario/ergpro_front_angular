import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Atividade } from '../atividade.model';
import { MatPaginator } from '@angular/material/paginator';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-read',
  templateUrl: './atividade-read.component.html',
  styleUrl: './atividade-read.component.css'
})
export class AtividadeReadComponent implements OnInit  {

  atividades: MatTableDataSource<Atividade> = new MatTableDataSource();
  displayedColumns = ['id','descricao', 'action']


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private atividadeService: AtividadeService){}

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividade => {
      this.atividades.data = atividade;
      this.atividades.paginator = this.paginator
      console.log(atividade)
    })
  }

  applyFilter(filterValue: string) {
    this.atividades.filter = filterValue.trim().toLowerCase();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CentroCusto } from '../centro-custo.model';
import { CentroCustoService } from '../centro-custo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-centro-custo-read',
  templateUrl: './centro-custo-read.component.html',
  styleUrl: './centro-custo-read.component.css'
})
export class CentroCustoReadComponent implements OnInit {

  centrosCusto: MatTableDataSource<CentroCusto> = new MatTableDataSource();
  displayedColumns = ['id','numero','descricao', 'datainicio', 'datafim', 'status' , 'action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private centroCustoService: CentroCustoService ) {}

  ngOnInit(): void {
    this.centroCustoService.read().subscribe(centroCusto => {
      this.centrosCusto.data = centroCusto;
      this.centrosCusto.paginator = this.paginator
      console.log(centroCusto)
    })
  }

  applyFilter(filterValue: string) {
    this.centrosCusto.filter = filterValue.trim().toLowerCase();
  }
}

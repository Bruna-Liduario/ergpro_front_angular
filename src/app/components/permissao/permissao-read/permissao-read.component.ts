import { Component, OnInit, ViewChild } from '@angular/core';
import { Permissao } from '../permissao.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PermissaoService } from '../permissao.service';

@Component({
  selector: 'app-permissao-read',
  templateUrl: './permissao-read.component.html',
  styleUrl: './permissao-read.component.css'
})
export class PermissaoReadComponent implements OnInit {

  permissoes: MatTableDataSource<Permissao> = new MatTableDataSource();
  displayedColumns = ['id','httpmethod','urlpattern','role','action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private permissaoService: PermissaoService ) {}

  ngOnInit(): void {
    this.permissaoService.read().subscribe(permissao => {
      this.permissoes.data = permissao;
      this.permissoes.paginator = this.paginator
      console.log(permissao)
    })
  }

  applyFilter(filterValue: string) {
    this.permissoes.filter = filterValue.trim().toLowerCase();
  }

}

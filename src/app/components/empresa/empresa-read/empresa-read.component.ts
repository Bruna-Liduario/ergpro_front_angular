import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from './../empresa.model';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-empresa-read',
  templateUrl: './empresa-read.component.html',
  styleUrl: './empresa-read.component.css'
})
export class EmpresaReadComponent implements OnInit {

  empresas: MatTableDataSource<Empresa> = new MatTableDataSource();
  displayedColumns = ['id','nome', 'cnpj', 'tel1', 'email', 'uf', 'statusEmpresa', 'action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private empresaService: EmpresaService){ }

  ngOnInit(): void {
    this.empresaService.read().subscribe(empresas => {
      this.empresas.data = empresas;
      this.empresas.paginator = this.paginator;
      console.log(empresas)
    })
  }

  applyFilter(filterValue: string) {
    this.empresas.filter = filterValue.trim().toLowerCase();
  }

  formatCnpj(cnpj: string): string {
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'
    );
  }

  formatTelefone(tel: string): string {
    const cleaned = ('' + tel).replace(/\D/g, '');    // Remove todos os caracteres não numéricos
    if (cleaned.startsWith('0800')) {
      return cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    }if (cleaned.length === 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return cleaned.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  }


}

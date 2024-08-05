import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrl: './cliente-read.component.css',
})
export class ClienteReadComponent implements OnInit {
  clientes: MatTableDataSource<Cliente> = new MatTableDataSource();
  displayedColumns = [
    'id',
    'nome',
    'razaoSocial',
    'cnpj',
    'tel1',
    'email',
    'uf',
    'nomeEmpresa',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes) => {
      this.clientes.data = clientes;
      this.clientes.paginator = this.paginator;
      console.log(clientes);
    });
  }

  applyFilter(filterValue: string) {
    this.clientes.filter = filterValue.trim().toLowerCase();
  }


  formatCnpj(cnpj: string): string {
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
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

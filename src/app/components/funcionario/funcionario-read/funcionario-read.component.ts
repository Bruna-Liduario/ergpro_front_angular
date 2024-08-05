import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrl: './funcionario-read.component.css'
})
export class FuncionarioReadComponent implements OnInit {


  funcionarios: MatTableDataSource<Funcionario> = new MatTableDataSource();
  displayedColumns = ['id','nome', 'cpf', 'admissao', 'matricula', 'cidade', 'uf', 'nomeEmpresa', 'centroCusto', 'descricaoCargo' , 'action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private funcionarioService: FuncionarioService){ }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios.data = funcionarios;
      this.funcionarios.paginator = this.paginator;
      console.log(funcionarios)
    })
  }

  applyFilter(filterValue: string) {
    this.funcionarios.filter = filterValue.trim().toLowerCase();
  }

  formatCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}

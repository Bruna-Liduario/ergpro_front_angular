import { EmpresaService } from './../../empresa/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { Router } from '@angular/router';
import { CentroCustoService } from '../../centro-custo/centro-custo.service';
import { CargoService } from '../../cargo/cargo.service';
import { Empresa } from '../../empresa/empresa.model';
import { CentroCusto } from '../../centro-custo/centro-custo.model';
import { Cargo } from '../../cargo/cargo.model';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrl: './funcionario-create.component.css'
})
export class FuncionarioCreateComponent implements OnInit {

  funcionarios: Funcionario = {
    nome: '',
    cpf: '',
    admissao: new Date(),
    matricula: 0,
    nascimento: new Date(),
    genero: '',
    estadoCivil: '',
    grau: '',
    tel1: '',
    email: '',
    cidade: '',
    uf: '',

    idEmpresa: '',
    idCentroCusto: '',
    idCargo: '',
  }

  generoList: string[] = [];
  estadoCivilList: string[] = [];
  grauList: string[] = [];
  empresas: Empresa[] = [];
  centrosCusto: CentroCusto[] = [];
  cargos: Cargo [] = [];


  constructor(private funcionarioService: FuncionarioService,
  private router: Router,
  private empresaService: EmpresaService,
  private centroCustoService: CentroCustoService,
  private cargoService: CargoService) {}

  ngOnInit(): void {

    this.funcionarioService.getGeneroList().subscribe((generoList) => {
      this.generoList = generoList;
    });
    this.funcionarioService.getEstadoCivilList().subscribe((estadoCivilList) => {
      this.estadoCivilList = estadoCivilList;
    });
    this.funcionarioService.getGrauList().subscribe((grauList) => {
      this.grauList = grauList;
    });
    this.centroCustoService.read().subscribe(centroCusto => {
      this.centrosCusto = centroCusto;
    })
    this.empresaService.read().subscribe(empresa => {
      this.empresas = empresa;
    })
    this.cargoService.read().subscribe(cargo => {
      this.cargos = cargo;
    })

  }

  createFuncionario(): void {
    if (this.funcionarios) {
      this.funcionarioService.create(this.funcionarios).subscribe({
        next: () => {
          this.funcionarioService.showMessage('Funcionário salvo com sucesso');
          this.router.navigate(['/funcionarios']);
        },
        error: (err) => {
          this.funcionarioService.showMessage(err);
        },
      });
    } else {
      console.error('nulo ou indefinido');
    }
  }

  cancelFuncionario(): void {
    this.router.navigate(['/funcionarios'])
  }



}

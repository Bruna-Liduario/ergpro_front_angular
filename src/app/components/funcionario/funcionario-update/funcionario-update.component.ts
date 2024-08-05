import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { Empresa } from '../../empresa/empresa.model';
import { CentroCusto } from '../../centro-custo/centro-custo.model';
import { Cargo } from '../../cargo/cargo.model';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../../empresa/empresa.service';
import { CentroCustoService } from '../../centro-custo/centro-custo.service';
import { CargoService } from '../../cargo/cargo.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrl: './funcionario-update.component.css'
})
export class FuncionarioUpdateComponent implements OnInit {

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
  private cargoService: CargoService,
  private route: ActivatedRoute) {}

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


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionarioService.readById(id).subscribe(funcionario => {
        this.funcionarios = funcionario;
      });
    } else {
      console.error('ID is null');
    }

  }

  updateFuncionario(): void {
    if (this.funcionarios) {
      this.funcionarioService.update(this.funcionarios).subscribe({
        next: () => {
          this.funcionarioService.showMessage('Funcionario atualizado com sucesso');
          this.router.navigate(['/funcionarios']);
        },
        error: (err) => {
          this.funcionarioService.showMessage(err);
        },
      });
    } else {
      console.error('Funcionario nulo ou indefinido');
    }
  }

  cancelFuncionario(): void {
    this.router.navigate(['/funcionarios'])
   }

}

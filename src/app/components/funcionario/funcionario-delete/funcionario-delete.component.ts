import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrl: './funcionario-delete.component.css'
})
export class FuncionarioDeleteComponent implements OnInit {

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

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.funcionarioService.readById(id).subscribe(funcionario => {
          this.funcionarios = funcionario;
        });
      } else {
        console.error('ID is null');
      }
    }

    deleteFuncionario(): void {
      if (this.funcionarios && this.funcionarios.id) {
        this.funcionarioService.delete(this.funcionarios.id).subscribe({
          next: () => {
            this.funcionarioService.showMessage('Funcionario excluído com sucesso!');
            this.router.navigate(['/app/funcionarios']);
          },
          error: (err) => {
            this.funcionarioService.showMessage(err);
          },
        });
      } else {
        console.error('ID do funcionario é nulo ou indefinido');
      }
    }


    cancelFuncionario(): void {
      this.router.navigate(['/app/funcionarios']);
    }

}

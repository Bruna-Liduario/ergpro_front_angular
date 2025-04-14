import { Component, OnInit } from '@angular/core';
import { ApontamentoInd } from '../../apontamento-individual.model';
import { ApontamentoService } from '../../apontamento.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apontamento-delete',
  templateUrl: './apontamento-delete.component.html',
  styleUrl: './apontamento-delete.component.css',
})
export class ApontamentoDeleteComponent implements OnInit {
  apontamentosind: ApontamentoInd = {
    idFuncionarios: '',
    idOrdemServico: '',
    idAtividade: '',

    local: '',
    data: new Date(),
    minutosSt: '',
    minutosextraSt: '',
    observacao: '',
  };

  constructor(
    private apontamentoService: ApontamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apontamentoService.readById(id).subscribe((apontamento) => {
        this.apontamentosind = apontamento;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteApontamento(): void {
    if (this.apontamentosind && this.apontamentosind.id) {
      this.apontamentoService.delete(this.apontamentosind.id).subscribe({
        next: () => {
          this.apontamentoService.showMessage(
            'Apontamento excluído com sucesso!'
          );
          this.router.navigate(['/app/apontamentosind/create']);
        },
        error: (err) => {
          this.apontamentoService.showMessage(err);
        },
      });
    } else {
      console.error('ID do apontamento é nulo ou indefinido');
    }
  }

  cancelApontamento(): void {
    this.router.navigate(['/app/apontamentosind/create']);
  }
}

import { Component, OnInit } from '@angular/core';
import { TiposervicoatividadeService } from '../tiposervicoatividade.service';
import { TipoServicoService } from '../../tipo-servico/tipo-servico.service';
import { AtividadeService } from '../../atividade/atividade.service';
import { TipoServico } from '../../tipo-servico/tipo-servico.model';
import { Atividade } from '../../atividade/atividade.model';
import { MatTableDataSource } from '@angular/material/table';
import { TipoServicoAtividade } from '../tiposervicoatividade.model';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiposervicoatividade-create',
  templateUrl: './tiposervicoatividade-create.component.html',
  styleUrl: './tiposervicoatividade-create.component.css',
})
export class TiposervicoatividadeCreateComponent implements OnInit {
  tipoServicoId!: number;
  tiposServicos: TipoServico[] = [];
  atividades: Atividade[] = [];
  atividadesDataSource = new MatTableDataSource<Atividade>(this.atividades);
  selection = new SelectionModel<Atividade>(true, []);

  constructor(
    private router: Router,
    private tipoServicoAtividadeService: TiposervicoatividadeService,
    private tipoServicoService: TipoServicoService,
    private atividadeService: AtividadeService
  ) {}

  ngOnInit(): void {
    this.tipoServicoService.read().subscribe((tiposervico) => {
      this.tiposServicos = tiposervico;
    });
    this.atividadeService.read().subscribe((atividades) => {
      this.atividades = atividades;
      this.atividadesDataSource.data = atividades;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.atividadesDataSource.data.length;
    return numSelected === numRows;
  }

  selectAll() {
    this.atividadesDataSource.data.forEach((row) => this.selection.select(row));
  }

  toggleSelection(row: Atividade) {
    this.selection.toggle(row);
  }

  saveTipoServicoAtividade(): void {
    if (this.tipoServicoId) {
      this.selection.selected.forEach((atividade) => {
        const tipoServicoAtividade: TipoServicoAtividade = {
          tipoServico: { id: this.tipoServicoId ?? 0 }, // add null check here
          atividade: { id: atividade.id ?? 0 } // add null check here
        };
        this.tipoServicoAtividadeService.createTipoServicoAtividade(tipoServicoAtividade).subscribe({
          next: () => {
            this.tipoServicoAtividadeService.showMessage('Associação salva com sucesso!')
            this.router.navigate(['/app/associacoes']);
          },
          error: (err) => {
            this.tipoServicoAtividadeService.showMessage(err);
          }
        });
      });
    } else {
      console.error('Tipo de Servico não selecionado');
    }
  }

  cancelAssociacao(): void {
    this.router.navigate(['/app/associacoes']);
  }
}

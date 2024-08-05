import { TipoServico } from './../../tipo-servico/tipo-servico.model';
import { Component, OnInit } from '@angular/core';
import { CentroCusto } from '../../centro-custo/centro-custo.model';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { CentrocustoTiposervicoService } from '../centrocusto-tiposervico.service';
import { CentroCustoService } from '../../centro-custo/centro-custo.service';
import { TipoServicoService } from '../../tipo-servico/tipo-servico.service';
import { CentroCustoTipoServico } from '../centrocusto-tiposervico.model';

@Component({
  selector: 'app-centrocusto-tiposervico-create',
  templateUrl: './centrocusto-tiposervico-create.component.html',
  styleUrl: './centrocusto-tiposervico-create.component.css'
})
export class CentrocustoTiposervicoCreateComponent implements OnInit {
  centroCustoId!: number;
  centrosCustos: CentroCusto[] = [];
  tiposServicos: TipoServico[] = [];
  tipoServicoDataSource = new MatTableDataSource<TipoServico>(this.tiposServicos);
  selection = new SelectionModel<TipoServico>(true, []);

  constructor(
    private router: Router,
    private centroCustoTipoServicoService: CentrocustoTiposervicoService,
    private centroCustoService: CentroCustoService,
    private tipoServicoService: TipoServicoService
  ){}

  ngOnInit(): void {
    this.tipoServicoService.read().subscribe((tiposervico) => {
      this.tiposServicos = tiposervico;
      this.tipoServicoDataSource.data = tiposervico;
    });
    this.centroCustoService.read().subscribe((centrocusto) => {
      this.centrosCustos = centrocusto;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tipoServicoDataSource.data.length;
    return numSelected === numRows;
  }

  selectAll() {
    this.tipoServicoDataSource.data.forEach((row) => this.selection.select(row));
  }

  toggleSelection(row: TipoServico) {
    this.selection.toggle(row);
  }

  saveCentroCustoTipoServico(): void {
    if (this.centroCustoId) {
      this.selection.selected.forEach((tiposervico) => {
        const centroCustoTipoServico: CentroCustoTipoServico = {
          centroCusto: { id: this.centroCustoId ?? 0 }, // add null check here
          tipoServico: { id: tiposervico.id ?? 0 } // add null check here
        };
        this.centroCustoTipoServicoService.createCentroCustoTipoServico(centroCustoTipoServico).subscribe({
          next: () => {
            this.centroCustoTipoServicoService.showMessage('Associação salva com sucesso!')
            this.router.navigate(['/associacoes']);
          },
          error: (err) => {
            this.centroCustoTipoServicoService.showMessage(err);
          }
        });
      });
    } else {
      console.error('Centro Custo não selecionado');
    }
  }

  cancelAssociacao(): void {
    this.router.navigate(['/associacoes']);
  }


}

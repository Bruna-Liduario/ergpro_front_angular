import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../ordem-servico.service';
import { Router } from '@angular/router';
import { OrdemServico } from '../ordem-servico.model';
import { CentroCustoService } from '../../centro-custo/centro-custo.service';
import { TipoServicoService } from '../../tipo-servico/tipo-servico.service';
import { CentroCusto } from '../../centro-custo/centro-custo.model';
import { TipoServico } from '../../tipo-servico/tipo-servico.model';

@Component({
  selector: 'app-ordem-servico-create',
  templateUrl: './ordem-servico-create.component.html',
  styleUrl: './ordem-servico-create.component.css'
})
export class OrdemServicoCreateComponent implements OnInit {

  ordemServico: OrdemServico = {
    descricao: '',
    datainicio: new Date(),
    datafim: new Date(),
    idCentroCusto: '',
    idTipoServico: ''
  }

  centrosCusto: CentroCusto [] = [];
  tiposServicos: TipoServico [] = [];
  tiposServicosFiltrados: TipoServico[] = [];

  constructor(private ordemServicoService: OrdemServicoService,
    private router: Router,
    private centroCustoService: CentroCustoService,
    private tipoServicoService: TipoServicoService){}

  ngOnInit(): void {
    this.centroCustoService.read().subscribe(centroCusto => {
      this.centrosCusto = centroCusto;
    })

    this.tipoServicoService.read().subscribe(tipoServico => {
      this.tiposServicos = tipoServico;
    })
  }


  createOrdemServico(): void {
    if (this.ordemServico) {
      this.ordemServicoService.create(this.ordemServico).subscribe({
        next: () => {
          this.ordemServicoService.showMessage('Ordem de Serviço criada com sucesso!');
          this.router.navigate(['/ordemservico']);
        },
        error: (err) => {
          this.ordemServicoService.showMessage(err);
        },
      });
    } else {
      console.error('Ordem de serviço nulo ou indefinido');
    }
  }


  cancelOrdemServico(): void {
    this.router.navigate(['/ordemservico'])
  }

  carregarTiposServicosPorCentroCusto(idCentroCusto: number): void {
    console.log('carregarTiposServicosPorCentroCusto chamada com idCentroCusto:', idCentroCusto);
    this.tipoServicoService.getTiposServicosByCentroCusto(idCentroCusto).subscribe(tiposServicos => {
      console.log('tiposServicos:', tiposServicos);
      this.tiposServicosFiltrados = tiposServicos;
    });
  }

}

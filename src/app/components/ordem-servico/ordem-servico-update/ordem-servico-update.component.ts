import { Component, OnInit } from '@angular/core';
import { OrdemServico } from '../ordem-servico.model';
import { OrdemServicoService } from '../ordem-servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentroCusto } from '../../centro-custo/centro-custo.model';
import { TipoServico } from '../../tipo-servico/tipo-servico.model';
import { CentroCustoService } from '../../centro-custo/centro-custo.service';
import { TipoServicoService } from '../../tipo-servico/tipo-servico.service';

@Component({
  selector: 'app-ordem-servico-update',
  templateUrl: './ordem-servico-update.component.html',
  styleUrl: './ordem-servico-update.component.css'
})
export class OrdemServicoUpdateComponent implements OnInit {

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
    private route: ActivatedRoute,
    private centroCustoService: CentroCustoService,
    private tipoServicoService: TipoServicoService){}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ordemServicoService.readById(id).subscribe(ordemServico => {
        this.ordemServico = ordemServico;
      });
    } else {
      console.error('ID is null');
    }


    this.centroCustoService.read().subscribe(centroCusto => {
      this.centrosCusto = centroCusto;
    })

    this.tipoServicoService.read().subscribe(tipoServico => {
      this.tiposServicos = tipoServico;
    })
  }

  updateOrdemServico(): void {
    if (this.ordemServico) {
      this.ordemServicoService.update(this.ordemServico).subscribe({
        next: () => {
          this.ordemServicoService.showMessage('Ordem de Serviço atualizado com sucesso');
          this.router.navigate(['/app/ordemservico']);
        },
        error: (err) => {
          this.ordemServicoService.showMessage(err);
        },
      });
    } else {
      console.error('Centro de custo é nulo ou indefinido');
    }
  }

  cancelOrdemServico(): void {
    this.router.navigate(['/app/ordemservico'])
   }

   carregarTiposServicosPorCentroCusto(idCentroCusto: number): void {
    console.log('carregarTiposServicosPorCentroCusto chamada com idCentroCusto:', idCentroCusto);
    this.tipoServicoService.getTiposServicosByCentroCusto(idCentroCusto).subscribe(tiposServicos => {
      console.log('tiposServicos:', tiposServicos);
      this.tiposServicosFiltrados = tiposServicos;
    });
  }

}

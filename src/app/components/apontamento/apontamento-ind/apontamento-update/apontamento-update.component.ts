import { Component, OnInit } from '@angular/core';
import { ApontamentoInd } from '../../apontamento-individual.model';
import { Funcionario } from '../../../funcionario/funcionario.model';
import { OrdemServico } from '../../../ordem-servico/ordem-servico.model';
import { Atividade } from '../../../atividade/atividade.model';
import { ApontamentoService } from '../../apontamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../funcionario/funcionario.service';
import { OrdemServicoService } from '../../../ordem-servico/ordem-servico.service';
import { AtividadeService } from '../../../atividade/atividade.service';
import { CentroCustoService } from '../../../centro-custo/centro-custo.service';
import { TipoServicoService } from '../../../tipo-servico/tipo-servico.service';

@Component({
  selector: 'app-apontamento-update',
  templateUrl: './apontamento-update.component.html',
  styleUrl: './apontamento-update.component.css'
})
export class ApontamentoUpdateComponent implements OnInit {

  apontamentosind: ApontamentoInd = {
    idFuncionarios: '',
    idOrdemServico: '',
    idAtividade: '',

    local: '',
    data: new Date(),
    minutos: 0,
    minutosExtra: 0,
    observacao: ''
  }

  funcionarios: Funcionario[] = [];
  ordemServico: OrdemServico[] = [];
  atividades: Atividade[] = [];

  centrosCusto: any[] = []; // declare a propriedade centrosCusto
  tiposServicos: any[] = []; // declare a propriedade tiposServicos


  constructor(private apontamentoService: ApontamentoService,
    private router: Router,
    private funcionarioService: FuncionarioService,
    private ordemServicoService: OrdemServicoService,
    private atividadeService: AtividadeService,
    private centroCustoService: CentroCustoService,
    private tipoServicoService: TipoServicoService,
    private route: ActivatedRoute
   ){}

   ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionario => {
      this.funcionarios = funcionario;
     })
     this.ordemServicoService.read().subscribe(ordemServico => {
      this.ordemServico = ordemServico;
     })
     this.atividadeService.read().subscribe(atividade => {
      this.atividades = atividade;
     })


     const id = this.route.snapshot.paramMap.get('id');
     if (id) {
       this.apontamentoService.readById(id).subscribe(apontamento => {
         this.apontamentosind = apontamento;
       });
     } else {
       console.error('ID is null');
     }
   }


  updateApontamento(): void {
    if (this.apontamentosind) {
      this.apontamentoService.update(this.apontamentosind).subscribe({
        next: () => {
          this.apontamentoService.showMessage('Apontamento atualizado com sucesso');
          this.router.navigate(['/apontamentosind/create']);
        },
        error: (err) => {
          this.apontamentoService.showMessage(err);
        },
      });
    } else {
      console.error('Apontamento nulo ou indefinido');
    }
  }

  cancelApontamento(): void {
    this.router.navigate(['/apontamentosind/create'])
   }


   selecionarOrdemServico(idOrdemServico: string): void {
    this.ordemServicoService.readById(idOrdemServico).subscribe(ordemServico => {
      console.log('Ordem de Serviço:', ordemServico);
      if (ordemServico) {
        // Buscar detalhes do Centro de Custo
        this.centroCustoService.readById(ordemServico.idCentroCusto).subscribe(centroCusto => {
          this.apontamentosind.descricaoCentroCusto = `${centroCusto.numero} - ${centroCusto.descricao}`;
        });

        // Buscar detalhes do Tipo de Serviço
        let tipoServico: any; // declare a variável aqui
        this.tipoServicoService.readById(ordemServico.idTipoServico).subscribe(tipoServicoResponse => {
          tipoServico = tipoServicoResponse; // atribuir o valor à variável
          this.apontamentosind.descricaoTipoServico = tipoServico.descricao;

          // Recuperar atividades relacionadas ao tipo de serviço
          this.atividadeService.getAtividadeByTipoServico(tipoServico.id)
           .subscribe((atividades: Atividade[]) => {
              this.atividades = atividades;
            });
        });
      }
    });
  }
}

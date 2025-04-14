import { Component, OnInit } from '@angular/core';
import { OrdemServico } from '../ordem-servico.model';
import { OrdemServicoService } from '../ordem-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordem-servico-delete',
  templateUrl: './ordem-servico-delete.component.html',
  styleUrl: './ordem-servico-delete.component.css'
})
export class OrdemServicoDeleteComponent implements OnInit {

  ordemServico: OrdemServico = {
    descricao: '',
    datainicio: new Date(),
    datafim: new Date(),
    idCentroCusto: '',
    idTipoServico: ''
  }

  constructor(private ordemServicoService: OrdemServicoService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ordemServicoService.readById(id).subscribe(ordemServico => {
        this.ordemServico = ordemServico;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteOrdemServico(): void {
    if (this.ordemServico && this.ordemServico.id) {
      this.ordemServicoService.delete(this.ordemServico.id).subscribe({
        next: () => {
          this.ordemServicoService.showMessage('Ordem de Servico excluído com sucesso!');
          this.router.navigate(['/app/ordemservico']);
        },
        error: (err) => {
          this.ordemServicoService.showMessage(err);
        },
      });
    } else {
      console.error('ID da ordem de serviço é nula ou indefinida');
    }
  }


  cancelOrdemServico(): void {
    this.router.navigate(['/app/ordemservico']);
  }
}

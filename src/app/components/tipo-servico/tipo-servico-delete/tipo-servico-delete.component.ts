import { Component, OnInit } from '@angular/core';
import { TipoServico } from '../tipo-servico.model';
import { TipoServicoService } from '../tipo-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-servico-delete',
  templateUrl: './tipo-servico-delete.component.html',
  styleUrl: './tipo-servico-delete.component.css'
})
export class TipoServicoDeleteComponent implements OnInit {

  tipoServico: TipoServico = {
    descricao: ''
  }

  constructor(
    private tipoServicoService: TipoServicoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tipoServicoService.readById(id).subscribe((tipoServico) => {
        this.tipoServico = tipoServico;
      });
    } else {
      console.error('ID is null');
    }

  }

  deleteTipoServico(): void {
    if (this.tipoServico && this.tipoServico.id) {
      this.tipoServicoService.delete(this.tipoServico.id).subscribe({
        next: () => {
          this.tipoServicoService.showMessage('Tipo de serviço excluído com sucesso!');
          this.router.navigate(['/tiposervico']);
        },
        error: (err) => {
          this.tipoServicoService.showMessage(err);
        },
      });
    } else {
      console.error('ID do tipo de serviço é nulo ou indefinido');
    }
  }


  cancelTipoServico(): void {
    this.router.navigate(['/tiposervico']);
  }

}

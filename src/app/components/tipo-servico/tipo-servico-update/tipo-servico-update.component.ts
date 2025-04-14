import { Component, OnInit } from '@angular/core';
import { TipoServico } from '../tipo-servico.model';
import { TipoServicoService } from '../tipo-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-servico-update',
  templateUrl: './tipo-servico-update.component.html',
  styleUrl: './tipo-servico-update.component.css'
})
export class TipoServicoUpdateComponent implements OnInit {

  tipoServico: TipoServico = {
    descricao: ''
  }

  constructor(private tipoServicoService: TipoServicoService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tipoServicoService.readById(id).subscribe(tipoServico => {
        this.tipoServico = tipoServico;
      });
    } else {
      console.error('ID is null');
    }

  }

  updateTipoServico(): void {
    if (this.tipoServico) {
      this.tipoServicoService.update(this.tipoServico).subscribe({
        next: () => {
          this.tipoServicoService.showMessage('Tipo de Servico atualizado com sucesso');
          this.router.navigate(['/app/tiposervico']);
        },
        error: (err) => {
          this.tipoServicoService.showMessage(err);
        },
      });
    } else {
      console.error('Tipo de Servico é nulo ou indefinido');
    }
  }

  cancelTipoServico(): void {
    this.router.navigate(['/app/tiposervico'])
   }

}

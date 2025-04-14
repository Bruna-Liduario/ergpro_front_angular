import { Component, OnInit } from '@angular/core';
import { TipoServico } from '../tipo-servico.model';
import { TipoServicoService } from '../tipo-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-servico-create',
  templateUrl: './tipo-servico-create.component.html',
  styleUrl: './tipo-servico-create.component.css'
})
export class TipoServicoCreateComponent implements OnInit {

  tipoServico: TipoServico = {
    descricao: ''
  }

  constructor(private tipoServicoService: TipoServicoService,
    private router: Router){}

  ngOnInit(): void {

  }

  createTipoServico(): void {
    if (this.tipoServico) {
      this.tipoServicoService.create(this.tipoServico).subscribe({
        next: () => {
          this.tipoServicoService.showMessage('Tipo de Servico criado com sucesso!');
          this.router.navigate(['/app/tiposervico']);
        },
        error: (err) => {
          this.tipoServicoService.showMessage(err);
        },
      });
    } else {
      console.error('Tipo de Servico nulo ou indefinido');
    }
  }

  cancelTipoServico(): void {
    this.router.navigate(['/app/tiposervico']);
  }


}

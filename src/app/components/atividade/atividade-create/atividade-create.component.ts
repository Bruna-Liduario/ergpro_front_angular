import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-create',
  templateUrl: './atividade-create.component.html',
  styleUrl: './atividade-create.component.css'
})
export class AtividadeCreateComponent implements OnInit {

  atividades: Atividade = {
    descricao: '',
  }

  constructor(private atividadeService: AtividadeService,
    private router: Router){}

  ngOnInit(): void {
  }

  createAtividades(): void {
    if (this.atividades) {
      this.atividadeService.create(this.atividades).subscribe({
        next: () => {
          this.atividadeService.showMessage('Atividade criada com sucesso!');
          this.router.navigate(['/atividades']);
        },
        error: (err) => {
          this.atividadeService.showMessage(err);
        },
      });
    } else {
      console.error('Atividade nula ou indefinida');
    }
  }

  cancelAtividades(): void {
    this.router.navigate(['/atividades']);
  }

}

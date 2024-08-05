import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atividade-update',
  templateUrl: './atividade-update.component.html',
  styleUrl: './atividade-update.component.css'
})
export class AtividadeUpdateComponent implements OnInit {

  atividades: Atividade = {
    descricao: '',
  }

  constructor(private atividadeService: AtividadeService,
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.atividadeService.readById(id).subscribe(atividade => {
          this.atividades = atividade;
        });
      } else {
        console.error('ID is null');
      }
    }

    updateAtividades(): void {
      if (this.atividades) {
        this.atividadeService.update(this.atividades).subscribe({
          next: () => {
            this.atividadeService.showMessage('Atividade atualizada com sucesso');
            this.router.navigate(['/atividades']);
          },
          error: (err) => {
            this.atividadeService.showMessage(err);
          },
        });
      } else {
        console.error('Atividade é nula ou indefinida');
      }
    }

    cancelAtividades(): void {
      this.router.navigate(['/atividades'])
     }


}

import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atividade-delete',
  templateUrl: './atividade-delete.component.html',
  styleUrl: './atividade-delete.component.css'
})
export class AtividadeDeleteComponent implements OnInit {

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

    deleteAtividades(): void {
      if (this.atividades && this.atividades.id) {
        this.atividadeService.delete(this.atividades.id).subscribe({
          next: () => {
            this.atividadeService.showMessage('Atividade excluída com sucesso!');
            this.router.navigate(['/app/atividades']);
          },
          error: (err) => {
            this.atividadeService.showMessage(err);
          },
        });
      } else {
        console.error('ID do atividade é nula ou indefinida');
      }
    }


    cancelAtividades(): void {
      this.router.navigate(['/app/atividades']);
    }

}

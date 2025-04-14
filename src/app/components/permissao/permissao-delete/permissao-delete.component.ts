import { Component, OnInit } from '@angular/core';
import { Permissao } from '../permissao.model';
import { PermissaoService } from '../permissao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permissao-delete',
  templateUrl: './permissao-delete.component.html',
  styleUrl: './permissao-delete.component.css'
})
export class PermissaoDeleteComponent implements OnInit {

  permissoes: Permissao = {
    httpMethod: '',
    urlPattern: '',
    role: ''
  }

  constructor(
    private permissaoService: PermissaoService,
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.permissaoService.readById(id).subscribe(permissao => {
          this.permissoes = permissao;
        });
      } else {
        console.error('ID é nulo');
      }
    }

    deletePermissao(): void {
      if (this.permissaoService && this.permissoes.id) {
        this.permissaoService.delete(this.permissoes.id).subscribe({
          next: () => {
            this.permissaoService.showMessage('Permissão excluída com sucesso!');
            this.router.navigate(['/app/permissoes']);
          },
          error: (err) => {
            this.permissaoService.showMessage(err);
          },
        });
      } else {
        console.error('ID do usuário é nulo ou indefinido');
      }
    }


    cancelPermissao(): void {
      this.router.navigate(['/app/permissoes']);
    }
}

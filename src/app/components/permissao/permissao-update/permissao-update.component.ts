import { Component, OnInit } from '@angular/core';
import { Permissao } from '../permissao.model';
import { PermissaoService } from '../permissao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permissao-update',
  templateUrl: './permissao-update.component.html',
  styleUrl: './permissao-update.component.css'
})
export class PermissaoUpdateComponent implements OnInit {

  permissoes: Permissao = {httpMethod: '', urlPattern: '', role: ''}

  constructor(
    private permissaoService: PermissaoService,
    private router: Router,
    private route: ActivatedRoute){}

    rolesList: String[] = [];

    ngOnInit(): void {
      this.permissaoService.getRolesList().subscribe((rolesList) => {
        this.rolesList = rolesList;
      });

      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.permissaoService.readById(id).subscribe(permissao => {
          this.permissoes = permissao;
        });
      } else {
        console.error('ID é nulo');
      }
    }

    updatePermissoes(): void {
      if (this.permissoes) {
        this.permissaoService.update(this.permissoes).subscribe({
          next: () => {
            this.permissaoService.showMessage('Permissão atualizada com sucesso');
            this.router.navigate(['/app/permissoes']);
          },
          error: (err) => {
            this.permissaoService.showMessage(err);
          },
        });
      } else {
        console.error('Tipo de Servico é nulo ou indefinido');
      }
    }

    cancelPermissao(): void {
      this.router.navigate(['/app/permissoes']);
    }
}

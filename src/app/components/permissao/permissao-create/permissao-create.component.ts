import { Component, OnInit } from '@angular/core';
import { Permissao } from '../permissao.model';
import { PermissaoService } from '../permissao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissao-create',
  templateUrl: './permissao-create.component.html',
  styleUrl: './permissao-create.component.css'
})
export class PermissaoCreateComponent implements OnInit {

  permissoes: Permissao = {
    httpMethod: '',
    urlPattern: '',
    role: ''
  }

  constructor(
    private permissaoService: PermissaoService,
    private router: Router){}

  rolesList: String[] = [];

  ngOnInit(): void {
    this.permissaoService.getRolesList().subscribe((rolesList) => {
      this.rolesList = rolesList;
    });
  }

  permissaoCreate(): void {
    this.permissaoService.create(this.permissoes).subscribe(
      () => {
        this.permissaoService.showMessage('Permissão cadastrada com sucesso!');
        this.router.navigate(['/app/permissoes']);
      },
      (error) => {
        this.permissaoService.showMessage('Erro ao cadastrar Permissão.');
        console.error('Erro ao cadastrar Permissão: ', error);
      }
    );
  }

  cancelPermissao(): void {
    this.router.navigate(['/app/permissoes']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrl: './usuario-create.component.css'
})
export class UsuarioCreateComponent implements OnInit{

  usuarios: Usuario = {
    login: '',
    password: '',
    role: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router){}

  rolesList: String[] = [];

  ngOnInit(): void {

    this.usuarioService.getRolesList().subscribe((rolesList) => {
      this.rolesList = rolesList;
    });

  }

  registerUser(): void {
    this.usuarioService.registerUser(this.usuarios).subscribe(
      () => {
        this.usuarioService.showMessage('Usuário cadastrado com sucesso!');
        this.router.navigate(['/app/usuarios']);
      },
      (error) => {
        this.usuarioService.showMessage('Erro ao cadastrar usuário.');
        console.error('Erro ao cadastrar usuário: ', error);
      }
    );
  }

  cancelUsuario(): void {
    this.router.navigate(['/app/usuarios']);
  }


}

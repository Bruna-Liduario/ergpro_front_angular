import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrl: './usuario-update.component.css'
})
export class UsuarioUpdateComponent implements OnInit{

  usuarios: Usuario = {login: '', password: '', role: ''};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute){}

  rolesList: String[] = [];

  ngOnInit(): void {
    this.usuarioService.getRolesList().subscribe((rolesList) => {
      this.rolesList = rolesList;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.readById(id).subscribe(usuario => {
        this.usuarios = usuario;
        this.usuarios.password = '';
      });
    } else {
      console.error('ID é nulo');
    }
  }

  updateUsuario(): void {
    const usuario = {
      id: this.usuarios.id,
      login: this.usuarios.login,
      password: this.usuarios.password, // Envie a senha como uma string
      role: this.usuarios.role
    };

    this.usuarioService.update(usuario).subscribe({
      next: () => {
        this.usuarioService.showMessage('Usuário atualizado com sucesso');
        this.router.navigate(['/usuarios']);
      },
      error: (err) => {
        this.usuarioService.showMessage(err);
      },
    });
  }


  cancelUsuario(): void {
    this.router.navigate(['/usuarios']);
  }

}

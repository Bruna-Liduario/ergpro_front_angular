import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrl: './usuario-delete.component.css'
})
export class UsuarioDeleteComponent implements OnInit {

  usuarios: Usuario = {login: '', password: '', role: ''};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit(): void {
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

    deleteUsuario(): void {
      if (this.usuarioService && this.usuarios.id) {
        this.usuarioService.delete(this.usuarios.id).subscribe({
          next: () => {
            this.usuarioService.showMessage('Usuário excluído com sucesso!');
            this.router.navigate(['/usuarios']);
          },
          error: (err) => {
            this.usuarioService.showMessage(err);
          },
        });
      } else {
        console.error('ID do usuário é nulo ou indefinido');
      }
    }

    cancelUsuario(): void {
      this.router.navigate(['/usuarios']);
    }
}

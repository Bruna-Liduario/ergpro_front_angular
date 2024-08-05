import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './usuario.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost:8080';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'x', {
       duration: 3000,
       horizontalPosition: 'right',
       verticalPosition: 'top'
      })
    }

    registerUser(usuario: Usuario): Observable<any> {
      return this.http.post(`${this.baseUrl}/auth/register`, usuario);
    }

    getRolesList(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/usuarios/buscar/roles`);
    }

    update(usuario: Usuario): Observable<any> {
      return this.http.put(`${this.baseUrl}/usuarios/atualizar`, usuario);
    }

    read(): Observable<Usuario[]> {
      const url = `${this.baseUrl}/usuarios/listar`;
      return this.http.get<Usuario[]>(url);
    }

    readById(id: string): Observable<Usuario> {
      const url = `${this.baseUrl}/usuarios/buscar/${id}`;
      return this.http.get<Usuario>(url);
    }

    delete(id: number): Observable<any> {
      const url = `${this.baseUrl}/usuarios/deletar/${id}`;
      return this.http.delete(url, { observe: 'response' }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao excluir usuário');
          }
        })
      );
    }
}

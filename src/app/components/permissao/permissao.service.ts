import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Permissao } from './permissao.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

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

    create(permissao: Permissao): Observable<any> {
      return this.http.post(`${this.baseUrl}/permissoes/salvar`, permissao);
    }

    getRolesList(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/usuarios/buscar/roles`);
    }

    update(permissao: Permissao): Observable<any> {
      return this.http.put(`${this.baseUrl}/permissoes/atualizar`, permissao);
    }

    read(): Observable<Permissao[]> {
      const url = `${this.baseUrl}/permissoes/listar`;
      return this.http.get<Permissao[]>(url);
    }

    readById(id: string): Observable<Permissao> {
      const url = `${this.baseUrl}/permissoes/buscar/${id}`;
      return this.http.get<Permissao>(url);
    }

    delete(id: number): Observable<any> {
      const url = `${this.baseUrl}/permissoes/deletar/${id}`;
      return this.http.delete(url, { observe: 'response' }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao excluir permissão');
          }
        })
      );
    }
}

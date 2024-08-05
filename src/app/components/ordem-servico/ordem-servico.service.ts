import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, Observable, throwError } from 'rxjs';
import { OrdemServico } from './ordem-servico.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

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

    create(ordemServico: OrdemServico): Observable<OrdemServico> {
      const url = `${this.baseUrl}/ordemservico/salvar`;
      return this.http.post<OrdemServico>(url, ordemServico).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar ordem de serviço');
          }
        })
      );
    }

    read(): Observable<OrdemServico[]> {
      const url = `${this.baseUrl}/ordemservico/listar`;
      return this.http.get<OrdemServico[]>(url);
    }

    readById(id: string): Observable<OrdemServico> {
      const url = `${this.baseUrl}/ordemservico/buscar/${id}`;
      return this.http.get<OrdemServico>(url);
    }


    update(ordemServico: OrdemServico): Observable<OrdemServico> {
      const url = `${this.baseUrl}/ordemservico/atualizar`;
      return this.http.put<OrdemServico>(url, ordemServico).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar ordem de serviço');
          }
        })
      );
    }

    delete(id: number): Observable<any> {
      const url = `${this.baseUrl}/ordemservico/deletar/${id}`;
      return this.http.delete(url, { observe: 'response' }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao excluir ordem de serviço');
          }
        })
      );
    }
}

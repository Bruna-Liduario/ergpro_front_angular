import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Atividade } from './atividade.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

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

    create(atividade: Atividade): Observable<Atividade> {
      const url = `${this.baseUrl}/atividades/salvar`;
      return this.http.post<Atividade>(url, atividade).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar atividade');
          }
        })
      );
    }

    read(): Observable<Atividade[]> {
      const url = `${this.baseUrl}/atividades/listar`;
      return this.http.get<Atividade[]>(url);
    }

    readById(id: string): Observable<Atividade> {
      const url = `${this.baseUrl}/atividades/buscar/${id}`;
      return this.http.get<Atividade>(url);
    }

    getAtividadeByTipoServico(idTipoServico: number): Observable<Atividade[]> {
      return this.http.get<Atividade[]>(`${this.baseUrl}/tiposervico-atividade/atividade/${idTipoServico}`);
    }


    update(atividade: Atividade): Observable<Atividade> {
      const url = `${this.baseUrl}/atividades/atualizar`;
      return this.http.put<Atividade>(url, atividade).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar atividade');
          }
        })
      );
    }

    delete(id: number): Observable<any> {
      const url = `${this.baseUrl}/atividades/deletar/${id}`;
      return this.http.delete(url, { observe: 'response' }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao excluir Atividade');
          }
        })
      );
    }


}

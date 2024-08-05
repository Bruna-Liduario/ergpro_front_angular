import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoServico } from './tipo-servico.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {

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

    create(tipoServico: TipoServico): Observable<TipoServico>{
      const url = `${this.baseUrl}/tiposervico/salvar`;
      return this.http.post<TipoServico>(url, tipoServico).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 500){
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar Tipo de Serviço')
          }
        })
      )
    }

    read(): Observable<TipoServico[]>{
      const url = `${this.baseUrl}/tiposervico/listar`;
      return this.http.get<TipoServico[]>(url);
    }

    readById(id: string): Observable<TipoServico> {
      const url = `${this.baseUrl}/tiposervico/buscar/${id}`;
      return this.http.get<TipoServico>(url);
    }

    getTiposServicosByCentroCusto(idCentroCusto: number): Observable<TipoServico[]> {
      return this.http.get<TipoServico[]>(`${this.baseUrl}/centrocusto-tiposervico/tiposervico/${idCentroCusto}`);
    }


    update(tipoServico: TipoServico): Observable<TipoServico> {
      const url = `${this.baseUrl}/tiposervico/atualizar`;
      return this.http.put<TipoServico>(url, tipoServico).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao criar cargo');
          }
        })
      );
    }

    delete(id: number): Observable<any> {
      const url = `${this.baseUrl}/tiposervico/deletar/${id}`;
      return this.http.delete(url, { observe: 'response' }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 500) {
            const errorMessage = error.error;
            console.error(errorMessage);
            return throwError(errorMessage);
          } else {
            return throwError('Erro ao excluir tipo de serviço');
          }
        })
      );
    }


}

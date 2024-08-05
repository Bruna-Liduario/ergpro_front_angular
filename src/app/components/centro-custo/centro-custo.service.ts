import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CentroCusto } from './centro-custo.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {

  baseUrl = 'http://localhost:8080';

  constructor(private snackBar: MatSnackBar,
    private http:HttpClient
  ) { }

  showMessage(msg: string): void {
   this.snackBar.open(msg, 'x', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
   })
  }

  create(centroCusto: CentroCusto): Observable<CentroCusto>{
    const url = `${this.baseUrl}/centrocusto/salvar`;
    return this.http.post<CentroCusto>(url, centroCusto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar empresa');
        }
      })
    );
  }

  getStatusList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/centrocusto/buscar/status`);
  }

  read(): Observable<CentroCusto[]> {
    const url = `${this.baseUrl}/centrocusto/listar`;
    return this.http.get<CentroCusto[]>(url);
  }

  readById(id: string): Observable<CentroCusto> {
    const url = `${this.baseUrl}/centrocusto/buscar/${id}`;
    return this.http.get<CentroCusto>(url);
  }

  update(centroCusto: CentroCusto): Observable<CentroCusto> {
    const url = `${this.baseUrl}/centrocusto/atualizar`;
    return this.http.put<CentroCusto>(url, centroCusto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar centro de custo');
        }
      })
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/centrocusto/deletar/${id}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao excluir centro de custo');
        }
      })
    );
  }



}

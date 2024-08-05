import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cargo } from './cargo.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

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


    create(cargo: Cargo): Observable<Cargo> {
      const url = `${this.baseUrl}/cargos/salvar`;
      return this.http.post<Cargo>(url, cargo).pipe(
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


    read(): Observable<Cargo[]> {
      const url = `${this.baseUrl}/cargos/listar`;
      return this.http.get<Cargo[]>(url);
    }

    readById(id: string): Observable<Cargo> {
      const url = `${this.baseUrl}/cargos/buscar/${id}`;
      return this.http.get<Cargo>(url);
    }


    update(cargo: Cargo): Observable<Cargo> {
      const url = `${this.baseUrl}/cargos/atualizar`;
      return this.http.put<Cargo>(url, cargo).pipe(
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
      const url = `${this.baseUrl}/cargos/deletar/${id}`;
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

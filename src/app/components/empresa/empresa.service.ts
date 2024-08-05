import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empresa } from './empresa.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  baseUrl = 'http://localhost:8080';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(empresa: Empresa): Observable<Empresa> {
    const url = `${this.baseUrl}/empresas/salvar`;
    return this.http.post<Empresa>(url, empresa).pipe(
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

  read(): Observable<Empresa[]> {
    const url = `${this.baseUrl}/empresas/listar`;
    return this.http.get<Empresa[]>(url);
  }

  getStatusList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/empresas/buscar/status`);
  }

  readById(id: string): Observable<Empresa> {
    const url = `${this.baseUrl}/empresas/buscar/${id}`;
    return this.http.get<Empresa>(url);
  }



  update(empresa: Empresa): Observable<Empresa> {
    const url = `${this.baseUrl}/empresas/atualizar`;
    return this.http.put<Empresa>(url, empresa).pipe(
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

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/empresas/deletar/${id}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao excluir empresa');
        }
      })
    );
  }
}

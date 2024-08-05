import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8080';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/clientes/salvar`;
    return this.http.post<Cliente>(url, cliente).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar cliente');
        }
      })
    );
  }

  read(): Observable<Cliente[]>{
    const url = `${this.baseUrl}/clientes/listar`;
    return this.http.get<Cliente[]>(url)
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/buscar/${id}`;
    return this.http.get<Cliente>(url);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/atualizar`;
    return this.http.put<Cliente>(url, cliente).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar Cliente');
        }
      })
    );
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/deletar/${id}`;
    return this.http.delete<Cliente>(url)
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Funcionario } from './funcionario.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

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

  create(funcionarios: Funcionario): Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionarios/salvar`;
    return this.http.post<Funcionario>(url, funcionarios).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar funcionário');
        }
      })
    );
  }

  getGeneroList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/funcionarios/buscar/genero`);
  }
  getEstadoCivilList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/funcionarios/buscar/estadocivil`);
  }
  getGrauList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/funcionarios/buscar/grau`);
  }

  read(): Observable<Funcionario[]> {
    const url = `${this.baseUrl}/funcionarios/listar`;
    return this.http.get<Funcionario[]>(url);
  }


  readById(id: string): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionarios/buscar/${id}`;
    return this.http.get<Funcionario>(url);
  }



  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionarios/atualizar`;
    return this.http.put<Funcionario>(url, funcionario).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar funcionário');
        }
      })
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/funcionarios/deletar/${id}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao excluir funcionário');
        }
      })
    );
  }


}

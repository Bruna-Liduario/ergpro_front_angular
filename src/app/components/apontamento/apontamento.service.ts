import { ApontamentoInd } from './apontamento-individual.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApontamentoService {

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

   create(apontamentoind: ApontamentoInd): Observable<ApontamentoInd>{
    const url = `${this.baseUrl}/apontamentos/salvar`;
    return this.http.post<ApontamentoInd>(url, apontamentoind).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao salvar Apontamento');
        }
      })
    );
  }

  read(): Observable<ApontamentoInd[]> {
    const url = `${this.baseUrl}/apontamentos/listar`;
    return this.http.get<ApontamentoInd[]>(url);
  }

  readById(id: string): Observable<ApontamentoInd> {
    const url = `${this.baseUrl}/apontamentos/buscar/${id}`;
    return this.http.get<ApontamentoInd>(url);
  }



  update(apontamentos: ApontamentoInd): Observable<ApontamentoInd> {
    const url = `${this.baseUrl}/apontamentos/atualizar`;
    return this.http.put<ApontamentoInd>(url, apontamentos).pipe(
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
    const url = `${this.baseUrl}/apontamentos/deletar/${id}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao excluir Apontamento');
        }
      })
    );
  }

}

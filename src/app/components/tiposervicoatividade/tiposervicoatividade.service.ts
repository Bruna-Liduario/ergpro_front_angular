import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TipoServicoAtividade } from './tiposervicoatividade.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TiposervicoatividadeService {

  baseUrl = 'http://localhost:8080';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }


  createTipoServicoAtividade(tipoServicoAtividade: TipoServicoAtividade): Observable<TipoServicoAtividade>{
    const url = `${this.baseUrl}/tiposervico-atividade/salvar`;
    return this.http.post<TipoServicoAtividade>(url, tipoServicoAtividade).pipe(
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


}

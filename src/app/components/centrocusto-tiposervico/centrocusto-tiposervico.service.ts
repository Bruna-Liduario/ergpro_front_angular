import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CentroCustoTipoServico } from './centrocusto-tiposervico.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentrocustoTiposervicoService {

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

  createCentroCustoTipoServico(centroCustoTipoServico: CentroCustoTipoServico): Observable<CentroCustoTipoServico>{
    const url = `${this.baseUrl}/centrocusto-tiposervico/salvar`;
    return this.http.post<CentroCustoTipoServico>(url, centroCustoTipoServico).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 500){
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao fazer relação')
        }
      })
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentroCustoService } from '../centro-custo.service';
import { CentroCusto } from '../centro-custo.model';

@Component({
  selector: 'app-centro-custo-create',
  templateUrl: './centro-custo-create.component.html',
  styleUrl: './centro-custo-create.component.css'
})
export class CentroCustoCreateComponent implements OnInit{

  centroCusto: CentroCusto ={
    numero: '',
    descricao: '',
    datainicio: new Date(),
    datafim: new Date(),
    status: '',
  }

  statusList: string[] = [];

  constructor(private centroCustoService: CentroCustoService,
    private router: Router) {}

  ngOnInit(): void {
    this.centroCustoService.getStatusList().subscribe((statusList) => {
      this.statusList = statusList;
    });
  }

  createCentroCusto(): void {
    if (this.centroCusto) {
      this.centroCustoService.create(this.centroCusto).subscribe({
        next: () => {
          this.centroCustoService.showMessage('Centro de Custo salvo com sucesso');
          this.router.navigate(['/centrocusto']);
        },
        error: (err) => {
          this.centroCustoService.showMessage(err);
        },
      });
    } else {
      console.error('nulo ou indefinido');
    }
  }

  cancelCentroCusto(): void {
    this.router.navigate(['/centrocusto'])
  }


}

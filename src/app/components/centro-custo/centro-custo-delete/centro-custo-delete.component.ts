import { Component, OnInit } from '@angular/core';
import { CentroCusto } from '../centro-custo.model';
import { CentroCustoService } from '../centro-custo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-centro-custo-delete',
  templateUrl: './centro-custo-delete.component.html',
  styleUrl: './centro-custo-delete.component.css'
})
export class CentroCustoDeleteComponent implements OnInit {

  centroCusto: CentroCusto ={
    numero: '',
    descricao: '',
    datainicio: new Date(),
    datafim: new Date(),
    status: '',
  }

  constructor(
    private centroCustoService: CentroCustoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.centroCustoService.readById(id).subscribe((centroCusto) => {
        this.centroCusto = centroCusto;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteCentroCusto(): void {
    if (this.centroCusto && this.centroCusto.id) {
      this.centroCustoService.delete(this.centroCusto.id).subscribe({
        next: () => {
          this.centroCustoService.showMessage('Centro de Custo excluído com sucesso!');
          this.router.navigate(['/centrocusto']);
        },
        error: (err) => {
          this.centroCustoService.showMessage(err);
        },
      });
    } else {
      console.error('ID do centro de custo é nulo ou indefinido');
    }
  }


  cancelCentroCusto(): void {
    this.router.navigate(['/centrocusto']);
  }

}

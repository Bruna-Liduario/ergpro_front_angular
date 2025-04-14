import { Component, OnInit } from '@angular/core';
import { CentroCustoService } from '../centro-custo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentroCusto } from '../centro-custo.model';

@Component({
  selector: 'app-centro-custo-update',
  templateUrl: './centro-custo-update.component.html',
  styleUrl: './centro-custo-update.component.css'
})
export class CentroCustoUpdateComponent implements OnInit {

  centroCusto: CentroCusto ={
    numero: '',
    descricao: '',
    datainicio: new Date(),
    datafim: new Date(),
    status: '',
  }

  constructor(private centroCustoService: CentroCustoService,
    private router: Router,
    private route: ActivatedRoute){}

  statusList: string[] = [];

  ngOnInit(): void {

    this.centroCustoService.getStatusList().subscribe((statusList) => {
      this.statusList = statusList;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.centroCustoService.readById(id).subscribe(centroCusto => {
        this.centroCusto = centroCusto;
      });
    } else {
      console.error('ID is null');
    }
  }

  updateCentoCusto(): void {
    if (this.centroCusto) {
      this.centroCustoService.update(this.centroCusto).subscribe({
        next: () => {
          this.centroCustoService.showMessage('Centro de Custo atualizado com sucesso');
          this.router.navigate(['/app/centrocusto']);
        },
        error: (err) => {
          this.centroCustoService.showMessage(err);
        },
      });
    } else {
      console.error('Centro de custo é nulo ou indefinido');
    }
  }

  cancelCentroCusto(): void {
    this.router.navigate(['/app/centrocusto'])
   }

}

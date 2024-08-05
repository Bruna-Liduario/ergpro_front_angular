import { Component, OnInit } from '@angular/core';
import { Cargo } from '../cargo.model';
import { CargoService } from '../cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargo-update',
  templateUrl: './cargo-update.component.html',
  styleUrl: './cargo-update.component.css'
})
export class CargoUpdateComponent implements OnInit {

  cargos: Cargo = {
    descricao: '',
  }

  constructor(private cargoService: CargoService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargoService.readById(id).subscribe(cargo => {
        this.cargos = cargo;
      });
    } else {
      console.error('ID is null');
    }
  }

  updateCargo(): void {
    if (this.cargos) {
      this.cargoService.update(this.cargos).subscribe({
        next: () => {
          this.cargoService.showMessage('Cargo atualizado com sucesso');
          this.router.navigate(['/cargos']);
        },
        error: (err) => {
          this.cargoService.showMessage(err);
        },
      });
    } else {
      console.error('Centro de custo é nulo ou indefinido');
    }
  }

  cancelCargo(): void {
    this.router.navigate(['/cargos'])
   }

}

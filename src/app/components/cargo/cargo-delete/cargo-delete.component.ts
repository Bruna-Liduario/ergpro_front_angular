import { Component, OnInit } from '@angular/core';
import { Cargo } from '../cargo.model';
import { CargoService } from '../cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargo-delete',
  templateUrl: './cargo-delete.component.html',
  styleUrl: './cargo-delete.component.css',
})
export class CargoDeleteComponent implements OnInit {
  cargos: Cargo = {
    descricao: '',
  };

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargoService.readById(id).subscribe((cargo) => {
        this.cargos = cargo;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteCargos(): void {
    if (this.cargos && this.cargos.id) {
      this.cargoService.delete(this.cargos.id).subscribe({
        next: () => {
          this.cargoService.showMessage('Cargo excluído com sucesso!');
          this.router.navigate(['/cargos']);
        },
        error: (err) => {
          this.cargoService.showMessage(err);
        },
      });
    } else {
      console.error('ID do cargo é nulo ou indefinido');
    }
  }


  cancelCargos(): void {
    this.router.navigate(['/cargos']);
  }

}

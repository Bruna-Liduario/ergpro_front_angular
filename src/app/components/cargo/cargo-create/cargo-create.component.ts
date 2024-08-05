import { CargoService } from './../cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from '../cargo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrl: './cargo-create.component.css'
})
export class CargoCreateComponent implements OnInit {

  cargos: Cargo = {
    descricao: '',
  }

  constructor(private cargoService: CargoService,
    private router: Router){}

  ngOnInit(): void {

  }

  createCargos(): void {
    if (this.cargos) {
      this.cargoService.create(this.cargos).subscribe({
        next: () => {
          this.cargoService.showMessage('Cargo criado com sucesso!');
          this.router.navigate(['/cargos']);
        },
        error: (err) => {
          this.cargoService.showMessage(err);
        },
      });
    } else {
      console.error('Cargo nulo ou indefinido');
    }
  }


  cancelCargos(): void {
    this.router.navigate(['/cargos'])
  }
}

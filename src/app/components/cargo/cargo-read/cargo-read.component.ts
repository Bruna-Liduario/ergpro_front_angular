import { Cargo } from './../cargo.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CargoService } from '../cargo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cargo-read',
  templateUrl: './cargo-read.component.html',
  styleUrl: './cargo-read.component.css'
})
export class CargoReadComponent implements OnInit {

  cargos: MatTableDataSource<Cargo> = new MatTableDataSource();
  displayedColumns = ['id','descricao', 'action']


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cargoService: CargoService){}

  ngOnInit(): void {
    this.cargoService.read().subscribe(cargo => {
      this.cargos.data = cargo;
      this.cargos.paginator = this.paginator
      console.log(cargo)
    })
  }

  applyFilter(filterValue: string) {
    this.cargos.filter = filterValue.trim().toLowerCase();
  }
}

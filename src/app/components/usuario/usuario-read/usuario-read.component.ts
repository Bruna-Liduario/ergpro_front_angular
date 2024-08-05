import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrl: './usuario-read.component.css'
})
export class UsuarioReadComponent implements OnInit {


  usuarios: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns = ['id','login','role','action']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService ) {}

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuario => {
      this.usuarios.data = usuario;
      this.usuarios.paginator = this.paginator
      console.log(usuario)
    })
  }

  applyFilter(filterValue: string) {
    this.usuarios.filter = filterValue.trim().toLowerCase();
  }
}

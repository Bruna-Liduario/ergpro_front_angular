import { EmpresaService } from '../empresa.service';
import { Empresa } from './../empresa.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-delete',
  templateUrl: './empresa-delete.component.html',
  styleUrl: './empresa-delete.component.css',
})
export class EmpresaDeleteComponent implements OnInit {

  empresa: Empresa = {
    statusEmpresa: '',
    cnpj: '',
    nome: '',
    tel1: '',
    email: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    uf: '',
  };

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.empresaService.readById(id).subscribe((empresa) => {
        this.empresa = empresa;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteEmpresa(): void {
    if (this.empresa && this.empresa.id) {
      this.empresaService.delete(this.empresa.id).subscribe({
        next: () => {
          this.empresaService.showMessage('Empresa excluída com sucesso!');
          this.router.navigate(['/empresas']);
        },
        error: (err) => {
          this.empresaService.showMessage(err);
        },
      });
    } else {
      console.error('ID da empresa é nulo ou indefinido');
    }
  }


  cancelEmpresa(): void {
    this.router.navigate(['/empresas']);
  }
}

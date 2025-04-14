import { Empresa } from './../empresa.model';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrl: './empresa-create.component.css'
})
export class EmpresaCreateComponent implements OnInit{

  empresa: Empresa ={
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
    uf: ''
  }


  statusList: string[] = [];


  constructor(private empresaService: EmpresaService,
    private router: Router){}

  ngOnInit(): void {
    this.empresaService.getStatusList().subscribe((statusList) => {
      this.statusList = statusList;
    });
  }

  createEmpresa(): void {
    if (this.empresa) {
      this.empresaService.create(this.empresa).subscribe({
        next: () => {
          this.empresaService.showMessage('Empresa criada com sucesso!');
          this.router.navigate(['/app/empresas']);
        },
        error: (err) => {
          this.empresaService.showMessage(err);
        },
      });
    } else {
      console.error('Empresa é nula ou indefinida');
    }
  }

  cancelEmpresa(): void {
   this.router.navigate(['/app/empresas'])
  }

  getMask(tel: string): string {
    const cleaned = ('' + tel).replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleaned.startsWith('0800')) {
      return '0000 000 0000'; // Máscara para números 0800
    } if (cleaned.length <= 10) {
      return '(00) 0000-00009'; // Máscara para telefones fixos
    }
    return '(00) 0 0000-0000'; // Máscara para celulares
  }

}

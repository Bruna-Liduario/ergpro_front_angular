import { EmpresaService } from './../../empresa/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Empresa } from '../../empresa/empresa.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent implements OnInit{

  empresas: Empresa[] = [];


  cliente: Cliente = {
    cnpj: '',
    nome: '',
    razaoSocial:'',
    tel1: '',
    email: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    uf: '',
    idEmpresa: '',
  }

  constructor(private router: Router,
    private clienteService: ClienteService,
    private empresaService: EmpresaService ){
  }

  ngOnInit(): void {
    this.empresaService.read().subscribe(empresas => {
      this.empresas = empresas;
    });
  }


  createCliente(): void {
    if (this.cliente) {
      this.clienteService.create(this.cliente).subscribe({
        next: () => {
          this.clienteService.showMessage('Cliente criado com sucesso!');
          this.router.navigate(['/app/clientes']);
        },
        error: (err) => {
          this.clienteService.showMessage(err);
        },
      });
    } else {
      console.error('Cliente nulo ou indefinido');
    }
  }

  cancelCliente(): void {
    this.router.navigate(['/app/clientes'])
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

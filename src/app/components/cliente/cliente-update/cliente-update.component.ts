import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../empresa/empresa.model';
import { Cliente } from '../cliente.model';
import { EmpresaService } from '../../empresa/empresa.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrl: './cliente-update.component.css'
})
export class ClienteUpdateComponent implements OnInit {

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

  constructor(private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private empresaService: EmpresaService){
  }

  ngOnInit(): void {
    this.empresaService.read().subscribe(empresas => {
      this.empresas = empresas;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    } else {
      console.error('ID is null');
    }

  }

  updateCliente(): void {
    if (this.cliente) {
      this.clienteService.update(this.cliente).subscribe({
        next: () => {
          this.clienteService.showMessage('Cliente atualizado com sucesso');
          this.router.navigate(['/clientes']);
        },
        error: (err) => {
          this.clienteService.showMessage(err);
        },
      });
    } else {
      console.error('Cliente é nulo ou indefinido');
    }

  }

  cancelCliente(): void{
    this.router.navigate(['/clientes'])
  }


  getMask(tel: string): string {
    const cleaned = ('' + tel).replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleaned.startsWith('0800')) {
      return '0000 000 0000'; // Máscara para números 0800
    }
    if (cleaned.length <= 10) {
      return '(00) 0000-00009'; // Máscara para telefones fixos
    }
    return '(00) 0 0000-0000'; // Máscara para celulares
  }
}

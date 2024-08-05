import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrl: './cliente-delete.component.css'
})
export class ClienteDeleteComponent implements OnInit {

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
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  deleteCliente(): void {
    if (this.cliente.id) {
      this.clienteService.delete(this.cliente.id).subscribe(() => {
        this.clienteService.showMessage('Cliente excluído com sucesso!');
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelCliente(): void {
    this.router.navigate(['/clientes'])
  }
}

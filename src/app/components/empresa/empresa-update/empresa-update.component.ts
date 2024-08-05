import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Empresa } from '../empresa.model';


@Component({
  selector: 'app-empresa-update',
  templateUrl: './empresa-update.component.html',
  styleUrl: './empresa-update.component.css'
})
export class EmpresaUpdateComponent implements OnInit {

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

  ngOnInit(): void {

  this.empresaService.getStatusList().subscribe((statusList) => {
    this.statusList = statusList;
  });

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.empresaService.readById(id).subscribe(empresa => {
      this.empresa = empresa;
    });
  } else {
    console.error('ID is null');
  }
  }

  constructor(private empresaService: EmpresaService,
    private router: Router, private route: ActivatedRoute){}

  updateEmpresa(): void {
    if (this.empresa) {
      this.empresaService.update(this.empresa).subscribe({
        next: () => {
          this.empresaService.showMessage('Empresa atualizada com sucesso');
          this.router.navigate(['/empresas']);
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
    this.router.navigate(['/empresas'])
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

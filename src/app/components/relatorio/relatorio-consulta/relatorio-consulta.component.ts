import { Component } from '@angular/core';
import { FuncionarioService } from '../../funcionario/funcionario.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-relatorio-consulta',
  templateUrl: './relatorio-consulta.component.html',
  styleUrl: './relatorio-consulta.component.css'
})
export class RelatorioConsultaComponent {

  funcionarios: any[] = [];
  selectedFuncionarioId: string = '';
  dataInicio?: Date;
  dataFim?: Date;

  constructor(
    private funcionarioService: FuncionarioService,
    private http: HttpClient // Adicione o HttpClient
  ) {}

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    });
  }


  gerarRelatorioPDF(): void {
    if (this.selectedFuncionarioId && this.dataInicio && this.dataFim) {
      const startDate = this.dataInicio.toISOString().split('T')[0];
      const endDate = this.dataFim.toISOString().split('T')[0];

      // Chamar a API para gerar o PDF
      const url = `http://localhost:8080/apontamentos/funcionario/${this.selectedFuncionarioId}/relatorio?startDate=${startDate}&endDate=${endDate}`;
      this.http.get(url, { responseType: 'blob' }).subscribe((pdfBlob: Blob) => {
        // Baixar o PDF
        saveAs(pdfBlob, 'relatorio_apontamentos.pdf');
      }, error => {
        console.error('Erro ao gerar o relatório:', error);
      });
    }
  }

}


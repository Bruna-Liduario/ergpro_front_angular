import { Component, OnInit, ViewChild } from '@angular/core';
import { ApontamentoInd } from '../../apontamento/apontamento-individual.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApontamentoService } from '../../apontamento/apontamento.service';

@Component({
  selector: 'app-consulta-filtro',
  templateUrl: './consulta-filtro.component.html',
  styleUrl: './consulta-filtro.component.css'
})
export class ConsultaFiltroComponent implements OnInit {


  apontamentosind: MatTableDataSource<ApontamentoInd> = new MatTableDataSource();
  displayedColumns = [
    'id', 'nomeFuncionario', 'descricaoOrdemServico',
    'centroCusto', 'descricaoTipoServico', 'descricaoAtividade',
    'local', 'data', 'minutosSt', 'minutosextraSt', 'observacao'
  ];

  minutosTotal: number = 0;
  minutosExtraTotal: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filters = {
    funcionario: '',
    centroCusto: '',
    equipe: '',
    tipoServico: '',
    atividade: '',
    dataInicio: '',
    dataFim: ''
  };


  constructor(private apontamentoService: ApontamentoService) { }

  ngOnInit(): void {

  }

  applyFilter(): void {
    if (this.filtersAreEmpty()) {
      this.apontamentosind.data = [];   // Limpa a tabela se o filtro estiver vazio
    } else {
      this.apontamentoService.read().subscribe(apontamentos => {
        this.apontamentosind.data = apontamentos;
        this.apontamentosind.paginator = this.paginator;


          this.apontamentosind.filterPredicate = (data: ApontamentoInd, filter: string) => {
            const filters = JSON.parse(filter);
            const dataDate = new Date(data['data']);
            const startDate = filters.dataInicio ? new Date(filters.dataInicio) : null;
            const endDate = filters.dataFim ? new Date(filters.dataFim) : null;

            return (
              (!filters.funcionario || data['nomeFuncionario']?.toLowerCase().includes(filters.funcionario.toLowerCase())) &&
              (!filters.centroCusto || data['centroCusto']?.toLowerCase().includes(filters.centroCusto.toLowerCase())) &&
              (!filters.tipoServico || data['descricaoTipoServico']?.toLowerCase().includes(filters.tipoServico.toLowerCase())) &&
              (!filters.atividade || data['descricaoAtividade']?.toLowerCase().includes(filters.atividade.toLowerCase())) &&
              (!startDate || !endDate || (dataDate >= startDate && dataDate <= endDate))
            );
          };

        this.apontamentosind.filter = JSON.stringify(this.filters);
        this.calculateTotals(this.apontamentosind.filteredData);
      });
    }
  }


  onFilterChange(): void {
    this.applyFilter();
  }

  filtersAreEmpty(): boolean {
    return Object.values(this.filters).every(value => value === '');
  }

  calculateTotals(apontamentos: ApontamentoInd[]): void {
    this.minutosTotal = 0;
    this.minutosExtraTotal = 0;
    apontamentos.forEach(apontamento => {
    this.minutosTotal += apontamento['minutos'];
    this.minutosExtraTotal += apontamento['minutosExtra'];
    });
    }


    formatMinutesToHours(minutes: number): string {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
      }
}

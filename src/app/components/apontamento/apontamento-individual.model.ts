export interface ApontamentoInd {

  id?: number

  idFuncionarios: string;
  idOrdemServico: string
  idAtividade: string

  descricaoCentroCusto?: string; // Nova propriedade
  descricaoTipoServico?: string; // Nova propriedade

  local: string
  data: Date
  minutos: number
  minutosExtra: number
  observacao: string

  [key: string]: any;

}

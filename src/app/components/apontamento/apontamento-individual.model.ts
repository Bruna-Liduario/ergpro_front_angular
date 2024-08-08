export interface ApontamentoInd {

  id?: number

  idFuncionarios: string;
  idOrdemServico: string
  idAtividade: string

  descricaoCentroCusto?: string;
  descricaoTipoServico?: string;

  local: string
  data: Date
  minutosSt: string
  minutosextraSt: string
  observacao: string

  [key: string]: any;

}

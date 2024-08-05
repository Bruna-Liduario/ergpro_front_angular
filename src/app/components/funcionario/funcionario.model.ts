export interface Funcionario {

  id?: number
  nome: string
  cpf: string
  admissao: Date
  matricula: number
  nascimento: Date
  genero: string
  estadoCivil: string
  grau: string
  tel1: string
  email: string
  cidade: string
  uf: string

  idEmpresa: string
  idCentroCusto: string
  idCargo: string

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { EmpresaComponent } from './views/empresa/empresa.component'
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { CentroCustoComponent } from './views/centro-custo/centro-custo.component';
import { CentroCustoCreateComponent } from './components/centro-custo/centro-custo-create/centro-custo-create.component';
import { CentroCustoUpdateComponent } from './components/centro-custo/centro-custo-update/centro-custo-update.component';
import { CentroCustoDeleteComponent } from './components/centro-custo/centro-custo-delete/centro-custo-delete.component';
import { CargoComponent } from './views/cargo/cargo.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { TipoServicoComponent } from './views/tipo-servico/tipo-servico.component';
import { TipoServicoCreateComponent } from './components/tipo-servico/tipo-servico-create/tipo-servico-create.component';
import { TipoServicoUpdateComponent } from './components/tipo-servico/tipo-servico-update/tipo-servico-update.component';
import { TipoServicoDeleteComponent } from './components/tipo-servico/tipo-servico-delete/tipo-servico-delete.component';
import { AtividadeComponent } from './views/atividade/atividade.component';
import { AtividadeCreateComponent } from './components/atividade/atividade-create/atividade-create.component';
import { AtividadeUpdateComponent } from './components/atividade/atividade-update/atividade-update.component';
import { AtividadeDeleteComponent } from './components/atividade/atividade-delete/atividade-delete.component';
import { OrdemServicoComponent } from './views/ordem-servico/ordem-servico.component';
import { OrdemServicoCreateComponent } from './components/ordem-servico/ordem-servico-create/ordem-servico-create.component';
import { OrdemServicoUpdateComponent } from './components/ordem-servico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoDeleteComponent } from './components/ordem-servico/ordem-servico-delete/ordem-servico-delete.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { PermissaoComponent } from './views/permissao/permissao.component';
import { PermissaoCreateComponent } from './components/permissao/permissao-create/permissao-create.component';
import { PermissaoUpdateComponent } from './components/permissao/permissao-update/permissao-update.component';
import { PermissaoDeleteComponent } from './components/permissao/permissao-delete/permissao-delete.component';
import { ApontamentoComponent } from './views/apontamento/apontamento.component';
import { ApontamentoCreateComponent } from './components/apontamento/apontamento-ind/apontamento-create/apontamento-create.component';
import { ApontamentoUpdateComponent } from './components/apontamento/apontamento-ind/apontamento-update/apontamento-update.component';
import { ApontamentoDeleteComponent } from './components/apontamento/apontamento-ind/apontamento-delete/apontamento-delete.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ConsultaFiltroComponent } from './components/consulta/consulta-filtro/consulta-filtro.component';
import { TiposervicoatividadeComponent } from './views/tiposervicoatividade/tiposervicoatividade.component';
import { TiposervicoatividadeCreateComponent } from './components/tiposervicoatividade/tiposervicoatividade-create/tiposervicoatividade-create.component';
import { AssociacoesComponent } from './views/associacoes/associacoes.component';
import { CentrocustoTiposervicoComponent } from './views/centrocusto-tiposervico/centrocusto-tiposervico.component';
import { CentrocustoTiposervicoCreateComponent } from './components/centrocusto-tiposervico/centrocusto-tiposervico-create/centrocusto-tiposervico-create.component';
import { LoginComponent } from './views/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from '../app/guards/auth.guard';
import { usuarioNaoAutenticadoGuard } from './guards/usuario-nao-autenticado.guard';
import { RelatorioComponent } from './views/relatorio/relatorio.component';


const routes: Routes = [

  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [usuarioNaoAutenticadoGuard]},
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
  {
    path: 'app',
    component: MainLayoutComponent, // usa o layout principal
    canActivate: [authGuard],
    children: [
  { path: 'inicio', component: HomeComponent },
  { path: 'empresas', component: EmpresaComponent },
  { path: 'empresas/create', component: EmpresaCreateComponent },
  { path: 'empresas/update/:id', component: EmpresaUpdateComponent },
  { path: 'empresas/delete/:id', component: EmpresaDeleteComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
  { path: 'centrocusto', component: CentroCustoComponent },
  { path: 'centrocusto/create', component: CentroCustoCreateComponent },
  { path: 'centrocusto/update/:id', component: CentroCustoUpdateComponent },
  { path: 'centrocusto/delete/:id', component: CentroCustoDeleteComponent },
  { path: 'cargos', component: CargoComponent },
  { path: 'cargos/create', component: CargoCreateComponent },
  { path: 'cargos/update/:id', component: CargoUpdateComponent },
  { path: 'cargos/delete/:id', component: CargoDeleteComponent },
  { path: 'tiposervico', component: TipoServicoComponent },
  { path: 'tiposervico/create', component: TipoServicoCreateComponent },
  { path: 'tiposervico/update/:id', component: TipoServicoUpdateComponent },
  { path: 'tiposervico/delete/:id', component: TipoServicoDeleteComponent },
  { path: 'atividades', component: AtividadeComponent },
  { path: 'atividades/create', component: AtividadeCreateComponent },
  { path: 'atividades/update/:id', component: AtividadeUpdateComponent },
  { path: 'atividades/delete/:id', component: AtividadeDeleteComponent },
  { path: 'ordemservico', component: OrdemServicoComponent },
  { path: 'ordemservico/create', component: OrdemServicoCreateComponent },
  { path: 'ordemservico/update/:id', component: OrdemServicoUpdateComponent },
  { path: 'ordemservico/delete/:id', component: OrdemServicoDeleteComponent },
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'funcionarios/create', component: FuncionarioCreateComponent },
  { path: 'funcionarios/update/:id', component: FuncionarioUpdateComponent },
  { path: 'funcionarios/delete/:id', component: FuncionarioDeleteComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuarios/create', component: UsuarioCreateComponent },
  { path: 'usuarios/update/:id', component: UsuarioUpdateComponent },
  { path: 'usuarios/delete/:id', component: UsuarioDeleteComponent },
  { path: 'permissoes', component: PermissaoComponent },
  { path: 'permissoes/create', component: PermissaoCreateComponent },
  { path: 'permissoes/update/:id', component: PermissaoUpdateComponent },
  { path: 'permissoes/delete/:id', component: PermissaoDeleteComponent },
  { path: 'apontamentos', component: ApontamentoComponent },
  { path: 'apontamentosind/create', component: ApontamentoCreateComponent },
  { path: 'apontamentosind/update/:id', component: ApontamentoUpdateComponent },
  { path: 'apontamentosind/delete/:id', component: ApontamentoDeleteComponent },
  { path: 'consultas', component: ConsultaComponent },
  { path: 'consultas/filtro', component: ConsultaFiltroComponent },
  { path: 'tipo-servico-atividade', component: TiposervicoatividadeComponent },
  { path: 'tipo-servico-atividade/create', component: TiposervicoatividadeCreateComponent },
  { path: 'associacoes', component: AssociacoesComponent },
  { path: 'centrocusto-tiposervico', component: CentrocustoTiposervicoComponent },
  { path: 'centrocusto-tiposervico/create', component: CentrocustoTiposervicoCreateComponent },
  { path: 'relatorio', component: RelatorioComponent },

    ]
  },
  { path: '**', redirectTo: 'login' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

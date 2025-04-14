import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component'
import { MatSelectModule } from '@angular/material/select';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { CentroCustoComponent } from './views/centro-custo/centro-custo.component';
import { CentroCustoCreateComponent } from './components/centro-custo/centro-custo-create/centro-custo-create.component';
import { CentroCustoReadComponent } from './components/centro-custo/centro-custo-read/centro-custo-read.component';
import { CentroCustoUpdateComponent } from './components/centro-custo/centro-custo-update/centro-custo-update.component';
import { CentroCustoDeleteComponent } from './components/centro-custo/centro-custo-delete/centro-custo-delete.component';
import { CargoComponent } from './views/cargo/cargo.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoReadComponent } from './components/cargo/cargo-read/cargo-read.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { TipoServicoComponent } from './views/tipo-servico/tipo-servico.component';
import { TipoServicoCreateComponent } from './components/tipo-servico/tipo-servico-create/tipo-servico-create.component';
import { TipoServicoReadComponent } from './components/tipo-servico/tipo-servico-read/tipo-servico-read.component';
import { TipoServicoUpdateComponent } from './components/tipo-servico/tipo-servico-update/tipo-servico-update.component';
import { TipoServicoDeleteComponent } from './components/tipo-servico/tipo-servico-delete/tipo-servico-delete.component';
import { AtividadeComponent } from './views/atividade/atividade.component';
import { AtividadeCreateComponent } from './components/atividade/atividade-create/atividade-create.component';
import { AtividadeReadComponent } from './components/atividade/atividade-read/atividade-read.component';
import { AtividadeUpdateComponent } from './components/atividade/atividade-update/atividade-update.component';
import { AtividadeDeleteComponent } from './components/atividade/atividade-delete/atividade-delete.component';
import { OrdemServicoComponent } from './views/ordem-servico/ordem-servico.component';
import { OrdemServicoCreateComponent } from './components/ordem-servico/ordem-servico-create/ordem-servico-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OrdemServicoReadComponent } from './components/ordem-servico/ordem-servico-read/ordem-servico-read.component';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { OrdemServicoUpdateComponent } from './components/ordem-servico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoDeleteComponent } from './components/ordem-servico/ordem-servico-delete/ordem-servico-delete.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { PermissaoComponent } from './views/permissao/permissao.component';
import { PermissaoCreateComponent } from './components/permissao/permissao-create/permissao-create.component';
import { PermissaoUpdateComponent } from './components/permissao/permissao-update/permissao-update.component';
import { PermissaoReadComponent } from './components/permissao/permissao-read/permissao-read.component';
import { PermissaoDeleteComponent } from './components/permissao/permissao-delete/permissao-delete.component';
import { ApontamentoComponent } from './views/apontamento/apontamento.component';
import { ApontamentoCreateComponent } from './components/apontamento/apontamento-ind/apontamento-create/apontamento-create.component';
import { ApontamentoReadComponent } from './components/apontamento/apontamento-ind/apontamento-read/apontamento-read.component';
import { ApontamentoUpdateComponent } from './components/apontamento/apontamento-ind/apontamento-update/apontamento-update.component';
import { ApontamentoDeleteComponent } from './components/apontamento/apontamento-ind/apontamento-delete/apontamento-delete.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ConsultaFiltroComponent } from './components/consulta/consulta-filtro/consulta-filtro.component';
import { TiposervicoatividadeComponent } from './views/tiposervicoatividade/tiposervicoatividade.component';
import { TiposervicoatividadeCreateComponent } from './components/tiposervicoatividade/tiposervicoatividade-create/tiposervicoatividade-create.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssociacoesComponent } from './views/associacoes/associacoes.component';
import { CentrocustoTiposervicoComponent } from './views/centrocusto-tiposervico/centrocusto-tiposervico.component';
import { CentrocustoTiposervicoCreateComponent } from './components/centrocusto-tiposervico/centrocusto-tiposervico-create/centrocusto-tiposervico-create.component';
import { LoginComponent } from './views/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { RelatorioComponent } from './views/relatorio/relatorio.component';
import { RelatorioConsultaComponent } from './components/relatorio/relatorio-consulta/relatorio-consulta.component';
import { AuthInterceptor } from './guards/auth.interceptor';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EmpresaComponent,
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
    EmpresaDeleteComponent,
    ClienteComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    CentroCustoComponent,
    CentroCustoCreateComponent,
    CentroCustoReadComponent,
    CentroCustoUpdateComponent,
    CentroCustoDeleteComponent,
    CargoComponent,
    CargoCreateComponent,
    CargoReadComponent,
    CargoUpdateComponent,
    CargoDeleteComponent,
    TipoServicoComponent,
    TipoServicoCreateComponent,
    TipoServicoReadComponent,
    TipoServicoUpdateComponent,
    TipoServicoDeleteComponent,
    AtividadeComponent,
    AtividadeCreateComponent,
    AtividadeReadComponent,
    AtividadeUpdateComponent,
    AtividadeDeleteComponent,
    OrdemServicoComponent,
    OrdemServicoCreateComponent,
    OrdemServicoReadComponent,
    OrdemServicoUpdateComponent,
    OrdemServicoDeleteComponent,
    FuncionarioComponent,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioReadComponent,
    UsuarioDeleteComponent,
    PermissaoComponent,
    PermissaoCreateComponent,
    PermissaoUpdateComponent,
    PermissaoReadComponent,
    PermissaoDeleteComponent,
    ApontamentoComponent,
    ApontamentoCreateComponent,
    ApontamentoReadComponent,
    ApontamentoUpdateComponent,
    ApontamentoDeleteComponent,
    ConsultaComponent,
    ConsultaFiltroComponent,
    TiposervicoatividadeComponent,
    TiposervicoatividadeCreateComponent,
    AssociacoesComponent,
    CentrocustoTiposervicoComponent,
    CentrocustoTiposervicoCreateComponent,
    LoginComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    RelatorioComponent,
    RelatorioConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

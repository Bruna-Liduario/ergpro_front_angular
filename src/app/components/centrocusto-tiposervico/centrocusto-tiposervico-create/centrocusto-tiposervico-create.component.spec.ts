import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrocustoTiposervicoCreateComponent } from './centrocusto-tiposervico-create.component';

describe('CentrocustoTiposervicoCreateComponent', () => {
  let component: CentrocustoTiposervicoCreateComponent;
  let fixture: ComponentFixture<CentrocustoTiposervicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentrocustoTiposervicoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrocustoTiposervicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

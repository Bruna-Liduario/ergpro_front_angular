import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrocustoTiposervicoComponent } from './centrocusto-tiposervico.component';

describe('CentrocustoTiposervicoComponent', () => {
  let component: CentrocustoTiposervicoComponent;
  let fixture: ComponentFixture<CentrocustoTiposervicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentrocustoTiposervicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrocustoTiposervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

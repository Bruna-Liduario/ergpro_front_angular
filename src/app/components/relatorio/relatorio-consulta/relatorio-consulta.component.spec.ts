import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioConsultaComponent } from './relatorio-consulta.component';

describe('RelatorioConsultaComponent', () => {
  let component: RelatorioConsultaComponent;
  let fixture: ComponentFixture<RelatorioConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatorioConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

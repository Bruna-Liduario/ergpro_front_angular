import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoatividadeComponent } from './tiposervicoatividade.component';

describe('TiposervicoatividadeComponent', () => {
  let component: TiposervicoatividadeComponent;
  let fixture: ComponentFixture<TiposervicoatividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposervicoatividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposervicoatividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

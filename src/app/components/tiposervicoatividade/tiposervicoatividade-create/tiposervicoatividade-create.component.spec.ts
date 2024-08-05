import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoatividadeCreateComponent } from './tiposervicoatividade-create.component';

describe('TiposervicoatividadeCreateComponent', () => {
  let component: TiposervicoatividadeCreateComponent;
  let fixture: ComponentFixture<TiposervicoatividadeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposervicoatividadeCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposervicoatividadeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

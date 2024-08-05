import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoCreateComponent } from './tipo-servico-create.component';

describe('TipoServicoCreateComponent', () => {
  let component: TipoServicoCreateComponent;
  let fixture: ComponentFixture<TipoServicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoServicoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoServicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

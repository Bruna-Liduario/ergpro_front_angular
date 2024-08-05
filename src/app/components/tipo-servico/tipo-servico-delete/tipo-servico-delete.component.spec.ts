import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoDeleteComponent } from './tipo-servico-delete.component';

describe('TipoServicoDeleteComponent', () => {
  let component: TipoServicoDeleteComponent;
  let fixture: ComponentFixture<TipoServicoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoServicoDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoServicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

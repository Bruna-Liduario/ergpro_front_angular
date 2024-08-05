import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoReadComponent } from './tipo-servico-read.component';

describe('TipoServicoReadComponent', () => {
  let component: TipoServicoReadComponent;
  let fixture: ComponentFixture<TipoServicoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoServicoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoServicoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

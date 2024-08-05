import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicoUpdateComponent } from './tipo-servico-update.component';

describe('TipoServicoUpdateComponent', () => {
  let component: TipoServicoUpdateComponent;
  let fixture: ComponentFixture<TipoServicoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoServicoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoServicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

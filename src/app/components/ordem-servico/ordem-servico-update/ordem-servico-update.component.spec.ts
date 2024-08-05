import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoUpdateComponent } from './ordem-servico-update.component';

describe('OrdemServicoUpdateComponent', () => {
  let component: OrdemServicoUpdateComponent;
  let fixture: ComponentFixture<OrdemServicoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemServicoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemServicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

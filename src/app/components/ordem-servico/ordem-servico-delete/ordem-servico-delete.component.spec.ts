import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoDeleteComponent } from './ordem-servico-delete.component';

describe('OrdemServicoDeleteComponent', () => {
  let component: OrdemServicoDeleteComponent;
  let fixture: ComponentFixture<OrdemServicoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemServicoDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemServicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

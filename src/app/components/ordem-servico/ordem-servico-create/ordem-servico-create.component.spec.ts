import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoCreateComponent } from './ordem-servico-create.component';

describe('OrdemServicoCreateComponent', () => {
  let component: OrdemServicoCreateComponent;
  let fixture: ComponentFixture<OrdemServicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemServicoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemServicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

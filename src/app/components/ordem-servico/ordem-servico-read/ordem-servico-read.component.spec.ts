import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoReadComponent } from './ordem-servico-read.component';

describe('OrdemServicoReadComponent', () => {
  let component: OrdemServicoReadComponent;
  let fixture: ComponentFixture<OrdemServicoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemServicoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemServicoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

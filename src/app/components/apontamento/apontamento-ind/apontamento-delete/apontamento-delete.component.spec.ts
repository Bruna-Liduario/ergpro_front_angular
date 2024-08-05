import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoDeleteComponent } from './apontamento-delete.component';

describe('ApontamentoDeleteComponent', () => {
  let component: ApontamentoDeleteComponent;
  let fixture: ComponentFixture<ApontamentoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApontamentoDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

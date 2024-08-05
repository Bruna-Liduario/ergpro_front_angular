import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoReadComponent } from './apontamento-read.component';

describe('ApontamentoReadComponent', () => {
  let component: ApontamentoReadComponent;
  let fixture: ComponentFixture<ApontamentoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApontamentoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

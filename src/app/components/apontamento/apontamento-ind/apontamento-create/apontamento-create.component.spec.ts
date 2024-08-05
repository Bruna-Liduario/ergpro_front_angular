import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoCreateComponent } from './apontamento-create.component';

describe('ApontamentoCreateComponent', () => {
  let component: ApontamentoCreateComponent;
  let fixture: ComponentFixture<ApontamentoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApontamentoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

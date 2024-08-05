import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoUpdateComponent } from './apontamento-update.component';

describe('ApontamentoUpdateComponent', () => {
  let component: ApontamentoUpdateComponent;
  let fixture: ComponentFixture<ApontamentoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApontamentoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCustoUpdateComponent } from './centro-custo-update.component';

describe('CentroCustoUpdateComponent', () => {
  let component: CentroCustoUpdateComponent;
  let fixture: ComponentFixture<CentroCustoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentroCustoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroCustoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

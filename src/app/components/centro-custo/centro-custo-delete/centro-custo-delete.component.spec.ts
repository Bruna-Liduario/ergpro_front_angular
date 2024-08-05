import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCustoDeleteComponent } from './centro-custo-delete.component';

describe('CentroCustoDeleteComponent', () => {
  let component: CentroCustoDeleteComponent;
  let fixture: ComponentFixture<CentroCustoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentroCustoDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroCustoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

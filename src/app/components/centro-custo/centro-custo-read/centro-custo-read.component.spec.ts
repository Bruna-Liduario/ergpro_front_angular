import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCustoReadComponent } from './centro-custo-read.component';

describe('CentroCustoReadComponent', () => {
  let component: CentroCustoReadComponent;
  let fixture: ComponentFixture<CentroCustoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentroCustoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroCustoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

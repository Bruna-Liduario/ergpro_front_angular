import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCustoCreateComponent } from './centro-custo-create.component';

describe('CentroCustoCreateComponent', () => {
  let component: CentroCustoCreateComponent;
  let fixture: ComponentFixture<CentroCustoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentroCustoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroCustoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

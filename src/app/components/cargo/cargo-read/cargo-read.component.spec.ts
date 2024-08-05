import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoReadComponent } from './cargo-read.component';

describe('CargoReadComponent', () => {
  let component: CargoReadComponent;
  let fixture: ComponentFixture<CargoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

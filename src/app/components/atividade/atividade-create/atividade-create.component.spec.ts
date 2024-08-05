import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeCreateComponent } from './atividade-create.component';

describe('AtividadeCreateComponent', () => {
  let component: AtividadeCreateComponent;
  let fixture: ComponentFixture<AtividadeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

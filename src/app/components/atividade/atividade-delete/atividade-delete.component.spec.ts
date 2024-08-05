import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDeleteComponent } from './atividade-delete.component';

describe('AtividadeDeleteComponent', () => {
  let component: AtividadeDeleteComponent;
  let fixture: ComponentFixture<AtividadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociacoesComponent } from './associacoes.component';

describe('AssociacoesComponent', () => {
  let component: AssociacoesComponent;
  let fixture: ComponentFixture<AssociacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoCreateComponent } from './permissao-create.component';

describe('PermissaoCreateComponent', () => {
  let component: PermissaoCreateComponent;
  let fixture: ComponentFixture<PermissaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

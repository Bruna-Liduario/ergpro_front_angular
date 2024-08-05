import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoDeleteComponent } from './permissao-delete.component';

describe('PermissaoDeleteComponent', () => {
  let component: PermissaoDeleteComponent;
  let fixture: ComponentFixture<PermissaoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

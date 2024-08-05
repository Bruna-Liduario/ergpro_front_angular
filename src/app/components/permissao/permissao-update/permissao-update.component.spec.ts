import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoUpdateComponent } from './permissao-update.component';

describe('PermissaoUpdateComponent', () => {
  let component: PermissaoUpdateComponent;
  let fixture: ComponentFixture<PermissaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

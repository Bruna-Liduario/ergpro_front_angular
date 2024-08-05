import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoReadComponent } from './permissao-read.component';

describe('PermissaoReadComponent', () => {
  let component: PermissaoReadComponent;
  let fixture: ComponentFixture<PermissaoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissaoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

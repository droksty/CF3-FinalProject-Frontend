import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertComponent } from './form-insert.component';

describe('FormInsertComponent', () => {
  let component: FormInsertComponent;
  let fixture: ComponentFixture<FormInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

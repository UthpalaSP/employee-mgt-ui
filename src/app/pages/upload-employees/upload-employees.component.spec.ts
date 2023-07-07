import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEmployeesComponent } from './upload-employees.component';

describe('UploadEmployeesComponent', () => {
  let component: UploadEmployeesComponent;
  let fixture: ComponentFixture<UploadEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

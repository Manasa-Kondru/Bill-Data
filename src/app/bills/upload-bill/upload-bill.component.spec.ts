import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBillComponent } from './upload-bill.component';

describe('UploadBillComponent', () => {
  let component: UploadBillComponent;
  let fixture: ComponentFixture<UploadBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
